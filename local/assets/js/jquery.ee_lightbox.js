(function ($) {

  var $lightbox;
  var slider;
  var slides = [];

  $.fn.ee_lightbox = function(options) {

    return this.each(function () {

      $(this).addClass('ee-lightbox-zoom');

      slides.push({
        src: $(this).attr('href'),
        title: $(this).attr('title')

      });

      $(this).click(function (e) {

        initLightbox({slides : slides});

        e.preventDefault();
        return false;

      });





    });

  };

  function initLightbox(params) {

    var slides = params.slides;

    var html = '' +
        '<div class="ee-lightbox">' +
        '<div class="ee-lightbox__header">' +
        '<div class="ee-lightbox__header-close"><i class="fas fa-times"></i></div>' +
        '</div> ' +
        '<div class="ee-lightbox__body">' +
          '<div class="ee-lightbox__body-wrapper"><div class="swiper-container"><div class="swiper-wrapper"></div></div><div class="swiper-button-prev swiper-button-white"></div><div class="swiper-button-next swiper-button-white"></div></div> ' +
        '</div> ' +
        '<div class="ee-lightbox__footer">' +
          '<div class="ee-lightbox__footer-description"></div>' +
        '</div> ' +
        '</div>';


    $lightbox = $(html).appendTo($('body'));

    $lightbox.find('.ee-lightbox__header-close').click(closeLightbox);

    if (slides.length === 1) {
      $lightbox.find('.swiper-button-white').hide();
    }

    var $swiperWrapper = $lightbox.find('.swiper-wrapper');
    var $footerDescription = $lightbox.find('.ee-lightbox__footer-description');



    slides.map(function (item) {

      $swiperWrapper.append('<div class="swiper-slide" style="background-image: url('+item.src+')"></div>');

    });


    slider = new Swiper ($lightbox.find('.swiper-container'), {

      navigation: {
        nextEl: $lightbox.find('.swiper-button-next'),
        prevEl: $lightbox.find('.swiper-button-prev')
      },

      on: {
        slideChange : function () {

         setDescription($footerDescription, slider.realIndex);

        }
      }


    });

    setDescription($footerDescription, 0);


  }

  function closeLightbox() {


    slider.destroy();
    $lightbox.remove();

  }

  function setDescription($el, index) {

    $el.html(slides[0].title)

  }


}(jQuery));