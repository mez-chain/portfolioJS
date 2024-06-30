document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

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
