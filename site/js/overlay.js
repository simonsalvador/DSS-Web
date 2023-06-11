document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".list-nav");
  const overlay = document.querySelector(".overlay");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  overlay.addEventListener("click", function () {
    this.classList.remove("open");
    menuToggle.classList.remove("active");
    navList.classList.remove("open");
  });
});
