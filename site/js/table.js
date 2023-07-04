"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const dataTable = document.querySelector("#data-table tbody");
  
    // Cargar datos desde localStorage
    function loadSavedDataFromLocalStorage() {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        const data = JSON.parse(savedData);
        data.forEach((item) => addRowToTable(item));
      }
    }
  
    // Agregar fila a la tabla
    function addRowToTable(data) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${data.firstName}</td>
                          <td>${data.lastName}</td>
                          <td>${data.email}</td>`;
      dataTable.appendChild(newRow);
    }
  
    // Cargar datos almacenados al cargar la página
    loadSavedDataFromLocalStorage();
  });
  