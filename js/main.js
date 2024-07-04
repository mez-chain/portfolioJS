document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const toggleButtonBars = document.getElementById("toggle-button-bars");
  const toggleButtonX = document.getElementById("toggle-button-x");
  const navbar = document.getElementById("navbar");

  toggleButtonX.classList.add("button-d-none");

  toggleButtonBars.addEventListener("click", function () {
    navbar.classList.toggle("active");
    toggleButtonBars.classList.toggle("button-display-bars");
    toggleButtonX.classList.toggle("button-display-x");
  });

  toggleButtonX.addEventListener("click", function () {
    navbar.classList.toggle("active");
    toggleButtonX.classList.toggle("button-display-x");
    toggleButtonBars.classList.toggle("button-display-bars");
  });


  function setActiveLink() {
    const hash = window.location.hash;
    links.forEach((link) => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Initial check
  setActiveLink();

  // Update active link on hash change
  window.addEventListener("hashchange", setActiveLink);
});
