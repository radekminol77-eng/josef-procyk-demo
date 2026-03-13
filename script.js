window.addEventListener("scroll", function () {
  // Teď hledáme .main-header místo .navbar
  const nav = document.querySelector(".main-header");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
