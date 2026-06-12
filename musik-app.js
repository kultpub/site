(function () {
  const data = window.CATALOG_DATA || { records: [], fields: [] };
  const els = {
    searchInput: document.querySelector("#searchInput"),
    orInput: document.querySelector("#orInput"),
    excludeInput: document.querySelector("#excludeInput"),
    groupFilter: document.querySelector("#groupFilter"),
    subjectFilter: document.querySelector("#subjectFilter"),
    materialFilter: document.querySelector("#materialFilter"),
    methodFilter: document.querySelector("#methodFilter"),
    yearTypeFilter: document.querySelector("#yearTypeFilter"),
    yearFromFilter: document.querySelector("#yearFromFilter"),
    yearToFilter: document.querySelector("#yearToFilter"),
    resetFilters: document.querySelector("#resetFilters"),
    totalCount: document.querySelector("#totalCount"),
    visibleCount: document.querySelector("#visibleCount"),
    results: document.querySelector("#results"),
    detail: document.querySelector("#detail"),
    exportButton: document.querySelector("#exportButton")
  };

  const catalogOptions = [
    { value: "C2i", label: "C2i musik" },
    { value: "C5a", label: "C5a slaginstrument" },
    { value: "C5b", label: "C5b stränginstrument" },
    { value: "C5c", label: "C5c blåsinstrument" },
    { value: "C5d", label: "C5d mekanisk musik" },
    { value: "C5e", label: "C5e tillbehör" },
    { value: "C5f", label: "C5f dans, film, teater" }
  ];
  const catalogLabels = new Map(catalogOptions.map((option) => [option.value, option.label]));
  const carlottaObjectBaseUrl = "https://carl.kulturen.com/web/object/";
  const yearTypeOptions = [
    { value: "object", label: "Objektdatering" },
    { value: "acquisition", label: "Förvärvsår" },
    { value: "registration", label: "Registreringsår" },
    { value: "reference", label: "Referensår" },
    { value: "exhibition", label: "Utställningsår" },
    { value: "mentioned", label: "Omnämnt år" }
  ];
  const yearTypeLabels = new Map(yearTypeOptions.map((option) => [option.value, option.label]));
  const fieldAliases = new Map(data.fields.map((field) => [normalize(field.label), field.id]));
  let selectedId = "";
  let visibleRecords = [];

  const prepared = data.records.map((rawRecord) => {
    const catalogCode = catalogCodeFrom(rawRecord.source, rawRecord.catalogGroup);
    const record = {
      ...rawRecord,
      catalogCode,
      catalogGroup: catalogLabels.get(catalogCode) || catalogCode,
      acquisitionMethod: acquisitionLabel(rawRecord.acquisitionMethod),
      acquisitionYear: scalar(rawRecord.acquisitionYear),
      yearTags: extractYearTags(rawRecord)
    };
    const normalizedSearch = normalize(record.search);
    const exactSearch = exactNormalize(record.search);
    return {
      ...record,
      normalizedSearch,
      exactSearch,
      normalizedInventory: normalize(record.inventory),
      exactInventory: exactNormalize(record.inventory),
      normalizedTitle: normalize(record.title),
      exactTitle: exactNormalize(record.title),
      normalizedSubjects: (record.fields?.["113"]?.values || []).map(normalize),
      normalizedMaterials: normalize((record.materials || []).join(" ")),
      normalizedMethod: normalize(record.acquisitionMethod || ""),
      normalizedYear: normalize(record.acquisitionYear || "")
    };
  });

  init();

  function init() {
    els.totalCount.textContent = `${data.count || prepared.length} objekt`;

    fillSelect(els.groupFilter, "Alla kataloger", catalogOptions);
    fillSelect(els.subjectFilter, "Alla sakord", unique(prepared.flatMap((record) => record.fields?.["113"]?.values || [])));
    fillSelect(els.materialFilter, "Alla material", unique(prepared.flatMap((record) => record.materials || [])));
    fillSelect(els.methodFilter, "Alla förvärvssätt", unique(prepared.map((record) => record.acquisitionMethod)));
    fillSelect(els.yearTypeFilter, "Alla årstyper", yearTypeOptions);

    [
      els.searchInput,
      els.orInput,
      els.excludeInput,
      els.groupFilter,
      els.subjectFilter,
      els.materialFilter,
      els.methodFilter,
      els.yearTypeFilter,
      els.yearFromFilter,
      els.yearToFilter
    ].forEach((element) => element.addEventListener("input", render));

    els.resetFilters.addEventListener("click", resetAllFilters);

    els.exportButton.addEventListener("click", exportCsv);
    document.addEventListener("keydown", handleKeys);

    render();
  }

  function resetAllFilters() {
    els.searchInput.value = "";
    els.orInput.value = "";
    els.excludeInput.value = "";
    els.groupFilter.value = "";
    els.subjectFilter.value = "";
    els.materialFilter.value = "";
    els.methodFilter.value = "";
    els.yearTypeFilter.value = "";
    els.yearFromFilter.value = "";
    els.yearToFilter.value = "";
    selectedId = "";
    render();
  }

  function fillSelect(select, label, values) {
    select.innerHTML = "";
    select.append(new Option(label, ""));
    values.forEach((value) => {
      if (value && typeof value === "object") {
        select.append(new Option(value.label, value.value));
      } else {
        select.append(new Option(value, value));
      }
    });
  }

  function selectedYearRange() {
    const from = parseYearInput(els.yearFromFilter.value);
    const to = parseYearInput(els.yearToFilter.value);
    const hasFrom = String(els.yearFromFilter.value || "").trim() !== "";
    const hasTo = String(els.yearToFilter.value || "").trim() !== "";

    if (from === null && to === null) return null;
    if (hasFrom && from === null) return null;
    if (hasTo && to === null && from !== null) {
      return { start: from, end: 999999 };
    }
    if (hasTo && to === null) return null;
    if (from !== null && to !== null && to <= from) {
      return { start: from, end: 999999 };
    }

    return {
      start: from === null ? -999999 : from,
      end: to === null ? 999999 : to
    };
  }

  function matchesYearFilter(record, yearType, yearRange) {
    return (record.yearTags || []).some((tag) => {
      if (yearType && tag.type !== yearType) return false;
      if (!yearRange) return true;
      return tag.end >= yearRange.start && tag.start <= yearRange.end;
    });
  }

  function render() {
    const query = parseQuery(els.searchInput.value);
    const orQuery = parseQuery(els.orInput.value);
    const excludeQuery = parseQuery(els.excludeInput.value);
    const displayQuery = combineQueries(query, orQuery);
    const group = normalize(els.groupFilter.value);
    const subject = normalize(els.subjectFilter.value);
    const material = normalize(els.materialFilter.value);
    const method = normalize(els.methodFilter.value);
    const yearType = els.yearTypeFilter.value;
    const yearRange = selectedYearRange();

    const matches = prepared
      .map((record) => ({ record, score: scoreRecord(record, query, orQuery) }))
      .filter(({ record, score }) => {
        if (score < 0) return false;
        if (group && normalize(record.catalogCode || "") !== group) return false;
        if (subject && !record.normalizedSubjects.includes(subject)) return false;
        if (material && !record.normalizedMaterials.includes(material)) return false;
        if (method && record.normalizedMethod !== method) return false;
        if ((yearType || yearRange) && !matchesYearFilter(record, yearType, yearRange)) return false;
        if (excludeQuery.length && scoreAnyPart(record, excludeQuery) >= 0) return false;
        return true;
      });

    sortRecords(matches);
    const matchCount = matches.length;
    visibleRecords = matches.slice(0, 400);
    els.visibleCount.textContent = matchCount > visibleRecords.length
      ? `${matchCount} träffar, visar ${visibleRecords.length}`
      : `${matchCount} träffar`;

    if (!visibleRecords.some(({ record }) => record.id === selectedId)) {
      selectedId = visibleRecords[0]?.record.id || "";
    }
    renderResults(displayQuery);
    renderDetail(displayQuery);
  }

  function parseQuery(raw) {
    const parts = [];
    const rawText = String(raw || "").trim();
    const pattern = /"([^"]+)"|“([^”]+)”|(\S+)/g;
    let match;

    while ((match = pattern.exec(raw || ""))) {
      const isExact = match[1] !== undefined || match[2] !== undefined;
      const token = match[1] || match[2] || match[3];
      const separator = token.indexOf(":");
      if (separator > 0) {
        const possibleField = normalize(token.slice(0, separator));
        const value = token.slice(separator + 1);
        parts.push({
          exact: isExact,
          fieldId: fieldAliases.get(possibleField) || "",
          text: isExact ? exactNormalize(value) : normalize(value)
        });
      } else {
        parts.push({
          exact: isExact,
          fieldId: "",
          text: isExact ? exactNormalize(token) : normalize(token)
        });
      }
    }

    const filtered = parts.filter((part) => part.text);
    const plainPhrase = rawText.includes(":") ? "" : normalize(rawText.replace(/^"|"$/g, ""));
    filtered.highlightParts = filtered;
    filtered.highlightTerms = plainPhrase && plainPhrase.includes(" ")
      ? [plainPhrase, ...filtered.filter((part) => !part.exact).map((part) => part.text)]
      : filtered.filter((part) => !part.exact).map((part) => part.text);
    return filtered;
  }

  function combineQueries(query, orQuery) {
    const combined = [...query, ...orQuery];
    combined.highlightParts = combined;
    combined.highlightTerms = [
      ...new Set([
        ...(query.highlightTerms || query.map((part) => part.text)),
        ...(orQuery.highlightTerms || orQuery.map((part) => part.text))
      ])
    ];
    return combined;
  }

  function scoreRecord(record, query, orQuery) {
    const hasQuery = query.length > 0;
    const hasOrQuery = orQuery.length > 0;

    if (!hasQuery && !hasOrQuery) return 0;

    const queryScore = hasQuery ? scoreAllParts(record, query) : -1;
    const orScore = hasOrQuery ? scoreAnyPart(record, orQuery) : -1;
    const bestScore = Math.max(queryScore, orScore);

    return bestScore < 0 ? -1 : bestScore;
  }

  function scoreAllParts(record, query) {
    if (!query.length) return 0;
    let score = 0;

    for (const part of query) {
      const partScore = scorePart(record, part);
      if (partScore < 0) {
        return -1;
      }
      score += partScore;
    }

    return score;
  }

  function scoreAnyPart(record, query) {
    let bestScore = -1;

    for (const part of query) {
      bestScore = Math.max(bestScore, scorePart(record, part));
    }

    return bestScore;
  }

  function scorePart(record, part) {
    if (part.fieldId) {
      const fieldText = part.exact
        ? exactNormalize((record.fields[part.fieldId]?.values || []).join(" "))
        : normalize((record.fields[part.fieldId]?.values || []).join(" "));
      return fieldText.includes(part.text) ? 18 : -1;
    }

    const inventory = part.exact ? record.exactInventory : record.normalizedInventory;
    const title = part.exact ? record.exactTitle : record.normalizedTitle;
    const search = part.exact ? record.exactSearch : record.normalizedSearch;

    if (inventory.includes(part.text)) {
      return inventory === part.text ? 60 : 38;
    }
    if (title.includes(part.text)) {
      return 24;
    }
    if (search.includes(part.text)) {
      return 8;
    }

    return -1;
  }

  function sortRecords(items) {
    const byInventory = (a, b) => naturalCompare(a.record.inventory, b.record.inventory);
    items.sort((a, b) => b.score - a.score || byInventory(a, b));
  }

  function renderResults(query) {
    if (!visibleRecords.length) {
      els.results.innerHTML = `<div class="empty-state">Inga träffar.</div>`;
      return;
    }

    els.results.innerHTML = visibleRecords
      .map(({ record }) => {
        const meta = [record.catalogGroup, record.acquisitionYear, record.acquisitionMethod].filter(Boolean).join(" · ");
        const summary = [record.inventory || record.id, record.title, meta, pickSnippet(record, query)].filter(Boolean).join(" · ");
        return `
          <article class="result-card ${record.id === selectedId ? "active" : ""}" data-id="${escapeAttr(record.id)}">
            <button class="result-select" type="button" data-id="${escapeAttr(record.id)}">
              <span class="result-line">${highlight(summary, query)}</span>
            </button>
            <a class="carlotta-button" href="${escapeAttr(carlottaUrl(record))}" target="_blank" rel="noopener">Carlotta</a>
          </article>
        `;
      })
      .join("");

    els.results.querySelectorAll(".result-select").forEach((button) => {
      button.addEventListener("click", () => {
        selectedId = button.dataset.id;
        renderResults(query);
        renderDetail(query);
      });
    });
  }

  function renderDetail(query) {
    const record = prepared.find((item) => item.id === selectedId);
    if (!record) {
      els.detail.innerHTML = `<div class="detail-empty">Välj ett objekt i listan.</div>`;
      return;
    }

    const importantIds = new Set(["113", "118", "120", "121", "123", "125", "142", "144", "205", "206", "229", "235", "240", "242", "244", "255", "1610172", "1610192", "1610193", "1610194", "1610195", "1610196", "1610198", "1609812"]);
    const entries = Object.values(record.fields).sort((a, b) => {
      const importantDelta = Number(importantIds.has(b.id)) - Number(importantIds.has(a.id));
      return importantDelta || a.label.localeCompare(b.label, "sv");
    });

    els.detail.innerHTML = `
      <div class="detail-header">
        <div class="detail-topline">
          <span class="source">${escapeHtml(record.source)} · objekt ${escapeHtml(record.id)}</span>
          <a class="carlotta-button" href="${escapeAttr(carlottaUrl(record))}" target="_blank" rel="noopener">Carlotta</a>
        </div>
        <h2>${highlight(record.inventory || record.id, query)}</h2>
        <p class="detail-value">${highlight(record.title, query)}</p>
      </div>
      <div class="detail-body">
        ${entries.map((entry) => `
          <section class="detail-section">
            <div class="detail-label">${highlight(entry.label, query)}</div>
            <p class="detail-value">${highlight(entry.values.join("\n"), query)}</p>
          </section>
        `).join("")}
      </div>
    `;
  }

  function renderYearTags(record) {
    const tags = record.yearTags || [];
    if (!tags.length) return "";

    const visibleTags = tags.slice(0, 18);
    const hiddenCount = tags.length - visibleTags.length;
    return `
      <section class="detail-section interpreted-years">
        <div class="detail-label">Tolkade år</div>
        <div class="year-tag-list">
          ${visibleTags.map((tag) => `
            <span class="year-tag">
              <strong>${escapeHtml(formatYearRange(tag))}</strong>
              <span>${escapeHtml(yearTypeLabels.get(tag.type) || tag.type)}</span>
              <em>${escapeHtml(tag.original)}</em>
            </span>
          `).join("")}
          ${hiddenCount > 0 ? `<span class="year-tag year-tag-more">+${hiddenCount} till</span>` : ""}
        </div>
      </section>
    `;
  }

  function pickSnippet(record, query) {
    const values = [
      record.title,
      record.catalogGroup,
      record.acquisitionMethod,
      record.acquisitionYear,
      ...(record.description || []),
      ...(record.people || []),
      ...(record.places || []),
      ...(record.materials || []),
      ...Object.values(record.fields || {}).flatMap((field) => field.values || [])
    ].filter(Boolean);

    const fallback = values[0] || record.title || "";
    if (!query.length) return trimText(fallback, 160);

    const hit = values.find((value) => {
      const normalized = normalize(value);
      return query.some((part) => normalized.includes(part.text));
    });

    return trimText(hit || fallback, 180);
  }

  function exportCsv() {
    const rows = visibleRecords.map(({ record }) => ({
      Inventarienummer: record.inventory,
      Benämning: record.title,
      Katalog: record.catalogGroup || "",
      Material: (record.materials || []).join("; "),
      Förvärvsår: record.acquisitionYear || "",
      Förvärvssätt: record.acquisitionMethod || "",
      Personer: (record.people || []).join("; "),
      Platser: (record.places || []).join("; "),
      Källa: record.source
    }));

    const headers = Object.keys(rows[0] || { Inventarienummer: "", Benämning: "" });
    const csv = [
      headers.join(","),
      ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "musikforemal-traffar.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function carlottaUrl(record) {
    return `${carlottaObjectBaseUrl}${encodeURIComponent(record.id)}`;
  }

  function extractYearTags(record) {
    const tags = [];

    Object.entries(record.fields || {}).forEach(([fieldId, field]) => {
      const label = field.label || `Fält ${fieldId}`;
      if (isNonYearField(fieldId, label)) return;

      (field.values || []).forEach((value) => {
        const original = scalar(value);
        if (!original) return;

        const type = yearTypeForField(fieldId, label, original);
        tags.push(...parseYearTags(original, type, fieldId, label));
        tags.push(...parseReferenceYearTags(original, fieldId, label));
      });
    });

    return dedupeYearTags(tags).sort((a, b) => {
      const typeOrder = ["object", "acquisition", "registration", "reference", "exhibition", "mentioned"];
      return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type) || a.start - b.start || a.end - b.end;
    });
  }

  function isNonYearField(fieldId, label) {
    const normalizedLabel = normalize(label);
    return fieldId === "242" || normalizedLabel === "forvarvsnummer" || normalizedLabel === "arendenummer";
  }

  function yearTypeForField(fieldId, label, value) {
    if (["144", "205", "1609592", "152", "277"].includes(fieldId)) return "object";
    if (["240", "1609812"].includes(fieldId)) return "acquisition";
    if (["259", "538", "539"].includes(fieldId)) return "registration";
    if (fieldId === "227" || /Kulturens\s+årsbok/i.test(value)) return "reference";
    if (["1610718", "1610719"].includes(fieldId)) return "exhibition";
    return "mentioned";
  }

  function parseYearTags(value, type, fieldId, fieldLabel) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    if (!text || /^okänt$/i.test(text)) return [];

    const tags = [];
    addEraRanges(tags, text, type, fieldId, fieldLabel);
    addRelativeCenturyRanges(tags, text, type, fieldId, fieldLabel);
    addTalRanges(tags, text, type, fieldId, fieldLabel);
    addPlainRanges(tags, text, type, fieldId, fieldLabel);

    if (!tags.length) {
      addSingleYears(tags, text, type, fieldId, fieldLabel);
    }

    return tags;
  }

  function parseReferenceYearTags(value, fieldId, fieldLabel) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    const tags = [];
    const pattern = /Kulturens\s+årsbok\s+(1[0-9]{3}|20[0-2][0-9])/gi;
    let match;

    while ((match = pattern.exec(text))) {
      const year = Number(match[1]);
      tags.push(makeYearTag("reference", year, year, match[0], fieldId, fieldLabel, "referensår"));
    }

    return tags;
  }

  function addEraRanges(tags, text, type, fieldId, fieldLabel) {
    const explicitRange = /(\d{1,4})\s*(f\.?\s*kr\.?|e\.?\s*kr\.?)\s*[-–]\s*(\d{1,4})\s*(f\.?\s*kr\.?|e\.?\s*kr\.?)/gi;
    const sharedEraRange = /(\d{1,4})\s*[-–]\s*(\d{1,4})\s*(f\.?\s*kr\.?|e\.?\s*kr\.?)/gi;
    const singleEra = /(\d{1,4})\s*(f\.?\s*kr\.?|e\.?\s*kr\.?)/gi;
    let match;

    while ((match = explicitRange.exec(text))) {
      tags.push(makeYearTag(type, eraYear(match[1], match[2]), eraYear(match[3], match[4]), match[0], fieldId, fieldLabel, "era-intervall"));
    }

    while ((match = sharedEraRange.exec(text))) {
      if (/\d{1,4}\s*(f\.?\s*kr\.?|e\.?\s*kr\.?)\s*[-–]/i.test(match[0])) continue;
      tags.push(makeYearTag(type, eraYear(match[1], match[3]), eraYear(match[2], match[3]), match[0], fieldId, fieldLabel, "era-intervall"));
    }

    while ((match = singleEra.exec(text))) {
      const year = eraYear(match[1], match[2]);
      tags.push(makeYearTag(type, year, year, match[0], fieldId, fieldLabel, "era-år"));
    }
  }

  function addRelativeCenturyRanges(tags, text, type, fieldId, fieldLabel) {
    const pattern = /\b(början|mitten|slutet)\s+av\s+(\d{3,4})\s*-?\s*tal(?:et)?\b/gi;
    let match;

    while ((match = pattern.exec(text))) {
      const start = Number(match[2]);
      if (!Number.isFinite(start)) continue;

      const part = match[1].toLocaleLowerCase("sv");
      const range = periodPartRange(start, part);
      tags.push(makeYearTag(type, range.start, range.end, match[0], fieldId, fieldLabel, `${part} av period`));
    }
  }

  function addTalRanges(tags, text, type, fieldId, fieldLabel) {
    const talRange = /\b(\d{3,4})\s*[-–]\s*(\d{2,4})\s*-?\s*tal(?:et)?\b/gi;
    const tal = /\b(\d{3,4})\s*-?\s*tal(?:et)?\b/gi;
    let match;

    while ((match = talRange.exec(text))) {
      const startNumber = Number(match[1]);
      const endNumber = expandShortYear(startNumber, Number(match[2]));
      tags.push(makeYearTag(type, periodStart(startNumber), periodEnd(endNumber), match[0], fieldId, fieldLabel, "period"));
    }

    while ((match = tal.exec(text))) {
      if (/^\d{3,4}\s*[-–]\s*\d{2,4}/.test(match[0])) continue;
      const year = Number(match[1]);
      tags.push(makeYearTag(type, periodStart(year), periodEnd(year), match[0], fieldId, fieldLabel, "period"));
    }
  }

  function addPlainRanges(tags, text, type, fieldId, fieldLabel) {
    const closedRange = /\b(\d{3,4})\s*[-–]\s*(\d{2,4})\b/g;
    const openRange = /\b(\d{3,4})\s*[-–]\s*(?!\d|tal)/gi;
    let match;

    while ((match = closedRange.exec(text))) {
      const after = text.slice(match.index + match[0].length, match.index + match[0].length + 12);
      if (/f\.?\s*kr\.?|e\.?\s*kr\.?|tal/i.test(`${match[0]}${after}`)) continue;
      const start = Number(match[1]);
      const end = expandShortYear(start, Number(match[2]));
      tags.push(makeYearTag(type, start, end, match[0], fieldId, fieldLabel, "intervall"));
    }

    while ((match = openRange.exec(text))) {
      const after = text.slice(match.index + match[0].length, match.index + match[0].length + 12);
      if (/f\.?\s*kr\.?|e\.?\s*kr\.?|tal/i.test(`${match[0]}${after}`)) continue;
      const start = Number(match[1]);
      tags.push(makeYearTag(type, start, start, match[0], fieldId, fieldLabel, "startår"));
    }
  }

  function addSingleYears(tags, text, type, fieldId, fieldLabel) {
    const singleYear = /(?<![\d.])(1[0-9]{3}|20[0-2][0-9]|[3-9][0-9]{2})(?![\d.])/g;
    let match;

    while ((match = singleYear.exec(text))) {
      if (isPageReference(text, match.index)) continue;
      const year = Number(match[1]);
      tags.push(makeYearTag(type, year, year, match[0], fieldId, fieldLabel, "år"));
    }
  }

  function isPageReference(text, index) {
    const before = text.slice(Math.max(0, index - 12), index).toLocaleLowerCase("sv");
    return /(?:^|\s)(?:sid|s\.?|sid\.)\s*$/.test(before);
  }

  function makeYearTag(type, rawStart, rawEnd, original, fieldId, fieldLabel, precision) {
    const start = Math.min(rawStart, rawEnd);
    const end = Math.max(rawStart, rawEnd);
    return { type, start, end, original, fieldId, fieldLabel, precision };
  }

  function dedupeYearTags(tags) {
    const seen = new Set();
    return tags.filter((tag) => {
      const key = [tag.type, tag.start, tag.end, tag.fieldId].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function eraYear(number, era) {
    const year = Number(number);
    return /f/i.test(era) ? -year : year;
  }

  function periodPartRange(start, part) {
    const span = start % 100 === 0 ? 99 : 9;
    if (part === "början") return { start, end: start + Math.floor(span / 3) };
    if (part === "mitten") return { start: start + Math.floor(span / 3) + 1, end: start + Math.floor((span * 2) / 3) };
    return { start: start + Math.floor((span * 2) / 3) + 1, end: start + span };
  }

  function periodStart(year) {
    return year % 100 === 0 ? year : year;
  }

  function periodEnd(year) {
    return year % 100 === 0 ? year + 99 : year + 9;
  }

  function expandShortYear(start, end) {
    if (end >= 100) return end;
    return Math.floor(start / 100) * 100 + end;
  }

  function parseYearInput(value) {
    const text = String(value || "").trim();
    if (!text) return null;
    const normalized = text.replace(/\s+/g, "");
    if (/^-\d{1,5}$/.test(normalized)) return Number(normalized);

    const eraMatch = normalized.match(/^(\d{1,5})(f\.?kr\.?|e\.?kr\.?)$/i);
    if (eraMatch) return eraYear(eraMatch[1], eraMatch[2]);

    const plainMatch = normalized.match(/^\d{1,5}$/);
    return plainMatch ? Number(normalized) : null;
  }

  function formatYearRange(tag) {
    const start = formatYear(tag.start);
    const end = formatYear(tag.end);
    return tag.start === tag.end ? start : `${start} - ${end}`;
  }

  function formatYear(year) {
    if (year === 999999) return "framåt";
    if (year === -999999) return "bakåt";
    return year < 0 ? `${Math.abs(year)} f.Kr.` : `${year}`;
  }

  function handleKeys(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      els.searchInput.focus();
      els.searchInput.select();
    }
  }

  function normalize(value) {
    return String(value || "")
      .toLocaleLowerCase("sv")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function exactNormalize(value) {
    return String(value || "")
      .toLocaleLowerCase("sv")
      .replace(/\s+/g, " ")
      .trim();
  }

  function unique(values) {
    return [...new Set(values.map(scalar).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "sv"));
  }

  function scalar(value) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const text = scalar(item);
        if (text) return text;
      }
      return "";
    }

    if (value === null || value === undefined) return "";
    if (typeof value === "object") {
      const candidates = [value.value, value.text, value._, value["#text"]];
      for (const candidate of candidates) {
        const text = scalar(candidate);
        if (text) return text;
      }
      return "";
    }

    const text = String(value).replace(/\s+/g, " ").trim();
    return text === "[object Object]" ? "" : text;
  }

  function acquisitionLabel(value) {
    const text = scalar(value);
    if (text) return text;
    return containsObjectValue(value) ? "jordfynd" : "";
  }

  function catalogCodeFrom(source, fallback) {
    const sourceText = scalar(source).toLocaleLowerCase("sv");
    const match = catalogOptions.find((option) => option.value.toLocaleLowerCase("sv") === sourceText);
    if (match) return match.value;

    const fallbackText = scalar(fallback);
    const fallbackMatch = catalogOptions.find((option) => option.value.toLocaleLowerCase("sv") === fallbackText.toLocaleLowerCase("sv"));
    return fallbackMatch ? fallbackMatch.value : fallbackText;
  }

  function containsObjectValue(value) {
    if (Array.isArray(value)) return value.some(containsObjectValue);
    return value !== null && typeof value === "object";
  }

  function naturalCompare(a, b) {
    return String(a || "").localeCompare(String(b || ""), "sv", { numeric: true, sensitivity: "base" });
  }

  function trimText(value, max) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    return text.length > max ? `${text.slice(0, max - 1)}…` : text;
  }

  function highlight(value, query) {
    const text = String(value || "");
    const parts = query.highlightParts || query;
    const fuzzyTerms = [
      ...new Set([
        ...(query.highlightTerms || []),
        ...parts.filter((part) => !part.exact).map((part) => part.text)
      ].filter((term) => term.length > 1))
    ].slice(0, 10);
    const exactTerms = [...new Set(parts.filter((part) => part.exact && part.text.length > 1).map((part) => part.text))].slice(0, 10);

    if ((!fuzzyTerms.length && !exactTerms.length) || !text) return escapeHtml(text);

    const folded = foldWithMap(text);
    const ranges = [];

    fuzzyTerms.forEach((term) => {
      let start = folded.text.indexOf(term);
      while (start !== -1) {
        const end = start + term.length - 1;
        if (folded.map[start] && folded.map[end]) {
          ranges.push([folded.map[start][0], folded.map[end][1]]);
        }
        start = folded.text.indexOf(term, start + term.length);
      }
    });

    const exactFolded = exactFoldWithMap(text);
    exactTerms.forEach((term) => {
      let start = exactFolded.text.indexOf(term);
      while (start !== -1) {
        const end = start + term.length - 1;
        if (exactFolded.map[start] && exactFolded.map[end]) {
          ranges.push([exactFolded.map[start][0], exactFolded.map[end][1]]);
        }
        start = exactFolded.text.indexOf(term, start + term.length);
      }
    });

    return renderMarkedText(text, mergeRanges(ranges));
  }

  function csvCell(value) {
    return `"${String(value || "").replace(/"/g, '""')}"`;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function foldWithMap(value) {
    const source = String(value || "");
    let foldedText = "";
    const map = [];
    let offset = 0;

    for (const char of source) {
      const start = offset;
      offset += char.length;

      const foldedChars = char
        .toLocaleLowerCase("sv")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, " ");

      for (const foldedChar of foldedChars) {
        foldedText += foldedChar;
        map.push([start, offset]);
      }
    }

    return { text: foldedText, map };
  }

  function exactFoldWithMap(value) {
    const source = String(value || "");
    let foldedText = "";
    const map = [];
    let offset = 0;

    for (const char of source) {
      const start = offset;
      offset += char.length;
      const foldedChars = char.toLocaleLowerCase("sv").replace(/\s/g, " ");

      for (const foldedChar of foldedChars) {
        foldedText += foldedChar;
        map.push([start, offset]);
      }
    }

    return { text: foldedText, map };
  }

  function mergeRanges(ranges) {
    if (!ranges.length) return [];
    const sorted = ranges
      .filter(([start, end]) => start < end)
      .sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    const merged = [sorted[0]];
    for (const [start, end] of sorted.slice(1)) {
      const last = merged[merged.length - 1];
      if (start <= last[1]) {
        last[1] = Math.max(last[1], end);
      } else {
        merged.push([start, end]);
      }
    }

    return merged;
  }

  function renderMarkedText(text, ranges) {
    if (!ranges.length) return escapeHtml(text);

    let html = "";
    let cursor = 0;
    ranges.forEach(([start, end]) => {
      html += escapeHtml(text.slice(cursor, start));
      html += `<mark class="search-hit">${escapeHtml(text.slice(start, end))}</mark>`;
      cursor = end;
    });
    html += escapeHtml(text.slice(cursor));
    return html;
  }
})();
