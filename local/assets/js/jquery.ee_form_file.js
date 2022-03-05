(function ($) {


  $.fn.ee_form_file = function() {
    return this.each(function() {

      var $input = $(this);
      $input.hide();
      var placeholder = $input.attr('placeholder');

      var $wrapper = $('<div class="form-file"></div>').insertAfter($input);


      var $text = $('<span class="form-file-placeholder">'+ placeholder + '</span>').appendTo($wrapper);


      $wrapper.click(function () {


        $input.trigger('click');

      });

      $input.change(function () {

        if (this.files.length) {

          $text.removeClass('form-file-placeholder').text(this.files[0].name)

        } else {

          $text.addClass('form-file-placeholder').text(placeholder)

        }


      });



    });
  };



}(jQuery));