document.getElementById("hamburger-menu").addEventListener("click", () => {
  menu = document.getElementById("hamburger-links")
  menu.classList.toggle("hidden")
})

Array.from(document.getElementsByClassName("see-more")).forEach((el, i, arr) => {
  el.addEventListener("click", () => {
    more = el.nextSibling
    more.classList.toggle("hidden")
  })
}
)


