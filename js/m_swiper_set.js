const swiper1 = new Swiper(".mySwiper1", { //1번 스와이퍼
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    duration:1000,
  },
  centeredSlides: true,
  slidesPerView: 2,
      spaceBetween: 10,
//  breakpoints: {
//    768: {
//      slidesPerView: 3,
//      spaceBetween: 10,
//      centeredSlides: true,
//    },
//  },

});