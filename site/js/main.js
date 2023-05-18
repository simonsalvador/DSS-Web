"use strict";

let form = document.querySelector("#form");

const msgCaptcha = document.querySelector(".msg-captcha");

form.addEventListener("submit", agregar);
function agregar() {
  e.preventDefault();

  let formData = new FormData(form);

  let nombre = formData.get("nombre");
  let apellido = formData.get("apellido");
  let email = formData.get("email");
  let password = formData.get("password");
}

function generateCaptcha() {
  let captcha = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++) {
    captcha += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return captcha;
}
function setCaptcha() {
  let captcha = generateCaptcha();
  document.querySelector("#captcha").value = captcha;
}
setCaptcha();
document.querySelector("form").addEventListener("submit", function (event) {
  let captcha = document.querySelector("#captcha").value;
  let text = document.querySelector("#text").value;
  if (captcha !== text) {
    msgCaptcha.innerHTML = "Codigo incorrecto";
    setCaptcha();
    event.preventDefault();
  } else {
    msgCaptcha.innerHTML = "Codigo correcto!";
  }
});
