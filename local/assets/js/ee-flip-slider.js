$(document).ready(function () {


  $('.ee-flip-slider').each(function () {

    new Swiper(this, {
      effect: 'flip',
      loop: true,
      //grabCursor: true,


    });

  });

  $('.ee-flip-slider .flip-toggle').click(function () {

    $(this).parent()[0].swiper.slideNext(1000);

  });





});