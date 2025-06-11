window.addEventListener("load", function () {
  // Kontrollera att datan är laddad
  if (typeof utstallningar === "undefined") {
    console.error("utstallningar-data.js har inte laddats ännu.");
    return;
  }

  // ⬇️ Fyll tabellen med data
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
      <td><button onclick="showKommentar(${index})">Visa kommentar</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Funktion för tusentalsavgränsning
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // ⬇️ Initiera DataTable
  const table = $('table.display').DataTable({
    autoWidth: false,
    columnDefs: [
      { targets: 0, width: "25px", className: "dt-right" },
      { targets: 3, width: "80px" },
      { targets: 4, width: "80px" },
      { targets: 6, width: "105px" }
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

  // ⬇️ Anpassad infotext
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

  updateInfo();              // Visa direkt vid start
  table.on('draw', updateInfo);  // Uppdatera efter varje åtgärd

  // ⬇️ Visa tabellen
  document.getElementById("table-container").style.display = "block";

  // ⬇️ Stiljusteringar för sökfält och dropdown
  $('div.dataTables_length').css({
    'padding-top': '1.5em'
  });

  $('div.dataTables_filter').css({
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-bottom': '1em'
  });

  $('input[type="search"]')
    .attr("placeholder", "Filtrera utställningar...")
    .css({
      'width': '500px',
      'min-width': '500px',
      'padding': '0.5em',
      'font-size': '1em',
      'border': '1px solid #ccc',
      'border-radius': '5px'
    });
});
