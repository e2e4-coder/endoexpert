$(document).ready(function () {


  $('.ee-slider-2').each(function () {

    var that = this;

    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tClose: 'Закрыть (Esc)',
      tLoading: 'Загрузка изображения #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] ,
        tPrev: 'Назад',
        tNext: 'Вперед',
        tCounter: '%curr% из %total%'
      },
      image: {
        tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',

      }
    });

    new Swiper($(this).find('.swiper-container')[0], {

      navigation: {
        nextEl: $(this).find('.-next')[0],
        prevEl: $(this).find('.-prev')[0],
      }


    });


    $(this).find('.-zoom').click(function () {

      $(that).find('.swiper-slide-active a').trigger('click');

    });

  });


});