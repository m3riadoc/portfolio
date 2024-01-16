document.querySelector(".form-button").addEventListener("click", function () {
  var arrow = this.querySelector("img");

  arrow.classList.add("move-arrow");

  setTimeout(function () {
    arrow.classList.remove("move-arrow");
    arrow.classList.add("appear-arrow");

    setTimeout(function () {
      arrow.classList.remove("appear-arrow");
    }, 1000);
  }, 1000);
});
