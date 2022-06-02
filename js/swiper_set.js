const swiper1 = new Swiper(".mySwiper1", { //1번 스와이퍼
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
          delay: 50000,
          disableOnInteraction: false,
        },

});