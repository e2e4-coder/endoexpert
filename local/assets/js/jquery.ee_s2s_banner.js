(function ($) {


  $.fn.ee_s2s_banner = function() {

      var $el = this;

      var $image = $el.find('.ee-s2s-banner__image');

      $(window).scroll(function (e) {

          var offset = $(document).scrollTop() - $image.offset().top + window.innerHeight;

          if (offset > 0) {

                  $image.css('margin', '0 -' + offset + 'px')


          }

          if ($(document).scrollTop() - $image.offset().top > 0) {

              window.location.href = $el.data('href');


          }


      });






    return this;

  };


}(jQuery));

