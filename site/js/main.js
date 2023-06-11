"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const dataForm = document.querySelector("#data-form");
  const submitBtn = document.querySelector("#submit-btn");
  const dataTable = document.querySelector("#data-table tbody");
  const captchaInput = document.querySelector("#captcha-input");
  let data = [];

  const msgCaptcha = document.querySelector(".msg-captcha");

  //  captcha inicial
  setCaptcha();

  //  evento formulario de datos
  dataForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const captchaValue = captcha.value;
    const captchaInputValue = captchaInput.value;

    if (captchaValue !== captchaInputValue) {
      msgCaptcha.innerHTML = "Código incorrecto";
      setCaptcha();
      captchaInput.value = "";
    } else {
      msgCaptcha.innerHTML = "";
      const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      data.push(newData);
      addRowToTable(newData);

      dataForm.reset();
      setCaptcha();
    }
  });

  //  generar el captcha
  function generateCaptcha() {
    let captcha = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++) {
      captcha += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return captcha;
  }

  //  valor del captcha
  function setCaptcha() {
    let captchaValue = generateCaptcha();
    captcha.value = captchaValue;
  }

  //  agregar una fila a la tabla
  function addRowToTable(data) {
    const row = document.createElement("tr");
    row.innerHTML = `
         <td>${data.firstName}</td>
         <td>${data.lastName}</td>
         <td>${data.email}</td>
         <td><button class="delete-btn">Eliminar</button></td>
     `;
    dataTable.appendChild(row);
  }

  // evento "Eliminar"
  dataTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const row = event.target.closest("tr");
      const index = Array.from(dataTable.children).indexOf(row);
      data.splice(index, 1);
      row.remove();
    }
  });
});
