var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 100,
  },
  speed: 1000,
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
     650: {
      slidesPerView: 2.5,
    },
    850: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 5,
    },
  },
});
