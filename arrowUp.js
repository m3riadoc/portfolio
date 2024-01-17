function checkScroll() {
  var arrowUp = document.querySelector(".arrowUp");
  var firstSectionHeight = document.querySelector(".section1").offsetHeight; 

  if (window.pageYOffset > firstSectionHeight) {
    arrowUp.style.opacity = 1; 
  } else {
    arrowUp.style.opacity = 0; 
  }
}

window.addEventListener("scroll", checkScroll);
