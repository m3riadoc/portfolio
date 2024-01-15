var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
