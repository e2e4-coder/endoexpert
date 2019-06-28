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



  $('.ee-flip-slider .rating-section select').each(function () {

    $(this).change(function () {

      $.post($(this).data('api-url'), {

        rating : $(this).val(),
        id : $(this).data('element-id'),

      }, function () {


      });

    }).barrating({
      theme: 'fa-stars-gold2',
      initialRating: $(this).data('current-rating'),
      readonly: !!$(this).data('voted'),
      allowEmpty: true,
      emptyValue: 0,
    });

  });



});