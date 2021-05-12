
$(document).ready(function () {




  delay = $('#face-slider-5').data('autoplay-delay');
  delay = delay ? {delay: delay} : false;

  var faceSlider5 = new Swiper ('#face-slider-5', {

    slidesPerView: 4,
    slidesPerGroup: 4,
    slidesPerColumn: 1,
    spaceBetween: 14,
    //loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: '#face-slider-5-next',
      prevEl: '#face-slider-5-prev',
    },

    autoplay: delay,

    breakpoints: {

      1023: {
        slidesPerView: 1,
        slidesPerColumn: 999,


      }
    }


  });








});

