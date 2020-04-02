// Event handler for displaying mobile navigation menu
document.getElementById("hamburger-menu").addEventListener("click", () => {
  menuLinks = document.getElementById("hamburger-links")
  menuLinks.classList.toggle("hidden")
})


// Add event listener for read more button
Array.from(document.getElementsByClassName("see-more")).forEach((seeMoreBtn, i, arr) => {

  console.log(seeMoreBtn);

  seeMoreBtn.addEventListener("click", () => {
    seeMoreBtn.parentNode.parentNode.childNodes.forEach((child, i, arr) => {
      console.log(child);
      if (child.className) {

        if (child.className.includes("full")) {
          child.classList.toggle("hidden")
          seeMoreBtn.classList.toggle("hidden")
        }
      }
    })
  //   // console.log(child).classLame
  //     if (child.className) {
  //       if (child.className.includes("full"))
  //         console.log(child)
  //         child.classList.toggle("hidden")
  //     }
  //   })
  // })
  })
})

Array.from(document.getElementsByClassName("see-less")).forEach((seeLessBtn, i, arr) => {
  seeLessBtn.addEventListener("click", () => {
    seeLessBtn.parentNode.classList.toggle("hidden")
    console.log(seeLessBtn.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nextElementSibling.classList.toggle("hidden"));
      //.classList.toggle("hidden");
    // Array.from(seeLessBtn.parentNode.parentNode.childNodes).forEach((child, i, arr), () => {
    //   if (child.className) {
    //     console.log(child);
        
    //   }
  })
})



