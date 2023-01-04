var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      dapat diklik: benar,
      dynamicBullets: benar,
    },
    navigasi: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoint:{
        0: {
            slidePerView: 1,
        },
        520: {
            slidePerView: 2,
        },
        950: {
            slidePerView: 3,
        },
    },
  });