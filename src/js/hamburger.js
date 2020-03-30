document.getElementById("hamburger-menu").addEventListener("click", () => {
  menu = document.getElementById("hamburger-links")
  if (menu.style.display == "none") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
})