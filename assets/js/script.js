const toggleNavButton = document.getElementById("toggleNavButton");
const mainNav = document.getElementById("mainNav");

toggleNavButton.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const contentSections = document.querySelectorAll(".content > div");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.dataset.target;

      menuLinks.forEach(function (menuLink) {
        menuLink.classList.remove("active");
      });
      this.classList.add("active");
      contentSections.forEach(function (section) {
        section.style.display = "none";
        if (section.classList.contains(target)) {
          section.style.display = "block";
        }
        if (target === "") {
          section.style.display = "block";
        }
      });
    });
  });
});

const footerYear = document.getElementById("footer-year");
const currentYear = new Date().getFullYear();
footerYear.textContent = `(command + ©) right ${currentYear}`;
