window.addEventListener("load", function () {
  // Kontrollera att datan är laddad
  if (typeof utstallningar === "undefined") {
    console.error("utstallningar-data.js har inte laddats ännu.");
    return;
  }

  // Fyll tabellen med data
  const tableBody = document.querySelector("table.display tbody");

  utstallningar.forEach((post, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.namn}</td>
      <td>${post.typ}</td>
      <td>${post.start}</td>
      <td>${post.slut}</td>
      <td>${post.lokal}</td>
      <td><button class="btn-kommentar" onclick="showKommentar(${index})"><i class="fa-regular fa-comment"></i> Visa kommentar</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Funktion för tusentalsavgränsning
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // Initiera DataTable med omvänd sortering (senaste först)
  const table = $('table.display').DataTable({
    autoWidth: false,
    order: [[0, "desc"]], // Omvänd sortering: nyaste ID / utställning överst
    columnDefs: [
      { targets: 0, width: "50px", className: "dt-right" },
      { targets: 3, width: "90px" },
      { targets: 4, width: "90px" },
      { targets: 6, width: "130px", orderable: false }
    ],
    dom: '<"top"f>rt<"bottom"lip><"clear">',
    language: {
      zeroRecords: "Inga matchande poster hittades",
      emptyTable: "Tabellen innehåller inga data",
      search: "",
      lengthMenu: "Visa _MENU_ rader",
      info: "",
      infoFiltered: "",
      paginate: {
        first: "Första",
        last: "Sista",
        next: "Nästa",
        previous: "Föregående"
      }
    }
  });

  // Anpassad infotext
  function updateInfo() {
    const info = table.page.info();
    const start = info.start + 1;
    const end = info.end;
    const total = formatNumber(info.recordsTotal);
    const filtered = formatNumber(info.recordsDisplay);

    let output = `Visar ${start} till ${end} av totalt ${filtered} rader`;
    if (info.recordsDisplay !== info.recordsTotal) {
      output += ` (filtrerad från totalt ${total} rader)`;
    }

    $('div.dataTables_info').html(output);
  }

  updateInfo();               // Visa direkt vid start
  table.on('draw', updateInfo); // Uppdatera efter varje åtgärd

  // Visa tabellen när den är redo
  document.getElementById("table-container").style.display = "block";

  // Stiljusteringar för sökfält och dropdown
  $('div.dataTables_length').css({
    'padding-top': '1.5em'
  });

  $('div.dataTables_filter').css({
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-bottom': '1.5em'
  });

  $('input[type="search"]')
    .attr("placeholder", "Filtrera utställningar...")
    .css({
      'width': '500px',
      'min-width': '300px',
      'padding': '0.5rem 1rem',
      'font-size': '1rem',
      'border': '1px solid var(--border-color, #ccc)',
      'border-radius': '8px',
      'outline': 'none'
    });
});

// Visa kommentar-modal
function showKommentar(index) {
  const post = utstallningar[index];
  const content = post.kommentar.trim()
    ? post.kommentar
    : `Det saknas närmare uppgifter om denna utställning.`;

  document.getElementById("modalText").innerHTML = content;
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modal-overlay").style.display = "block";

  const reportContainer = document.getElementById("reportButtonContainer");
  reportContainer.innerHTML = "";

  // Knapp: Ändra kommentar
  const editButton = document.createElement("button");
  editButton.classList.add("btn-edit");
  editButton.innerHTML = '<i class="fa-solid fa-envelope" style="margin-right: 6px;"></i>Ändra kommentar';
  editButton.onclick = (event) => {
    event.stopPropagation();
    const editSubject = encodeURIComponent(`Utställningslista - ändra kommentar: id ${post.id}, utställning: ${post.namn}`);
    window.location.href = `mailto:johan.hofvendahl@kulturen.com?subject=${editSubject}`;
  };

  // Knapp: Rapportera fel
  const reportButton = document.createElement("button");
  reportButton.classList.add("btn-report");
  reportButton.innerHTML = '<i class="fa-solid fa-envelope" style="margin-right: 6px;"></i>Rapportera fel';
  reportButton.onclick = (event) => {
    event.stopPropagation();
    const reportSubject = encodeURIComponent(`Felrapport utställningslista: id ${post.id}, utställning: ${post.namn}`);
    window.location.href = `mailto:johan.hofvendahl@kulturen.com?subject=${reportSubject}`;
  };

  reportContainer.appendChild(editButton);
  reportContainer.appendChild(reportButton);
}

// Modalhantering
function closeKommentarModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modal-overlay").style.display = "none";
}

function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
  document.getElementById("modal-overlay").style.display = "none";
}

// Dark mode-funktion
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  updateDarkModeIcon(isDark);
}

function updateDarkModeIcon(isDark) {
  const icon = document.getElementById("dark-mode-icon");
  if (icon) {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

// Global DOM-lyssnare för knappar och overlay
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    const toggleInput = document.querySelector(".dark-mode-toggle input");
    if (toggleInput) toggleInput.checked = true;
    updateDarkModeIcon(true);
  }

  const resetButton = document.getElementById("reset-button");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  }

  const infoButton = document.getElementById("info-button");
  if (infoButton) {
    infoButton.addEventListener("click", () => {
      document.getElementById("infoModal").style.display = "block";
      document.getElementById("modal-overlay").style.display = "block";
    });
  }

  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("infoModal").style.display = "none";
      this.style.display = "none";
    });
  }
});
