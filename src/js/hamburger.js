document.getElementById("hamburger-menu").addEventListener("click", () => {
  menu = document.getElementById("hamburger-links")
  menu.classList.toggle("hidden")
})

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

// Array.from(document.getElementsByClassName("see-less")).forEach((seeLessBtn, i, arr) => {
//   seeLessBtn.addEventListener("click", () => {
//     seeLessBtn.parentNode.parentNode.firstChildtoggle("hidden")
//     // Array.from(seeLessBtn.parentNode.parentNode.childNodes).forEach((child, i, arr), () => {
//     //   if (child.className) {
//     //     console.log(child);
        
//     //   }
      
//     })
//     })
//   }
// )


