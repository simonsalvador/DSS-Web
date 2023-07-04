"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const dataTable = document.querySelector("#data-table tbody");
  let lastAddedRow = null;


  // Datos estáticos precargados
  const staticData = [
    { firstName: "Juan", lastName: "Perez", email: "juanperez@gmail.com" },
    { firstName: "Martin", lastName: "Garcia", email: "martinGarcia1@gmail.com" },
  ];

  // Cargar datos desde localStorage
  function loadSavedDataFromLocalStorage() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const data = JSON.parse(savedData);
      data.forEach((item) => addRowToTable(item));
    } else {
      // Utilizar datos estáticos si no hay datos en el localStorage
      staticData.forEach((item) => addRowToTable(item));
      localStorage.setItem("formData", JSON.stringify(staticData));
    }
  }

  // Agregar fila a la tabla
  function addRowToTable(data) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${data.firstName}</td>
                        <td>${data.lastName}</td>
                        <td>${data.email}</td>
                        <td><button class="delete-btn">Eliminar</button></td>`;
    dataTable.appendChild(newRow);

     // Resaltar la fila recién agregada
     if (lastAddedRow) {
      lastAddedRow.classList.remove("resaltar");
    }
    
    lastAddedRow = newRow;
    lastAddedRow.classList.add("resaltar");
  }

  // Eliminar fila de la tabla
  function deleteRow(event) {
    if (event.target.classList.contains("delete-btn")) {
      const row = event.target.parentElement.parentElement;
      row.remove();
      const formData = Array.from(dataTable.rows).map((row) => {
        const firstName = row.cells[0].textContent;
        const lastName = row.cells[1].textContent;
        const email = row.cells[2].textContent;
        return { firstName, lastName, email };
      });
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }

  // Escuchar eventos de clic en la tabla para eliminar filas
  dataTable.addEventListener("click", deleteRow);

  // Cargar datos almacenados al cargar la página
  loadSavedDataFromLocalStorage();
});