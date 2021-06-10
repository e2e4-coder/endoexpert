(function ($) {


  $.fn.ee_fixed_table = function() {
    return this.each(function() {

      var $table = $(this).find('table');

      $table.clone().appendTo($(this).find('.ee-fixed-table__wrapper')).wrap('<div class="clone"></div>').parent()
          .css('width', $table.width() + 'px')
          .css('height', $table.find('thead').height() + 1 + 'px');





    });
  };







}(jQuery));