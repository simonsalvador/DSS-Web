"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const dataForm = document.querySelector("#data-form");
  const captchaInput = document.querySelector("#captcha-input");
  const msgCaptcha = document.querySelector(".msg-captcha");

  //  captcha inicial
  setCaptcha();

  //  evento formulario de datos
  dataForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const captchaValue = document.querySelector("#captcha").value;
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
      saveDataToLocalStorage(data);
  
      dataForm.reset();
      setCaptcha();
      openTablePage();

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
    const captcha = generateCaptcha();
    document.querySelector("#captcha").value = captcha;
  }


  // Almacenar datos en localStorage
  function saveDataToLocalStorage(data) {
    localStorage.setItem("formData", JSON.stringify(data));
  }

  function openTablePage() {
    window.open("table.html", "_blank");
  }

});

