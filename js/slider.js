document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: false, // Без бесконечного цикла
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
