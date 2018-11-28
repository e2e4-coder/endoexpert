(function($) {

  $.fn.charCounter = function() {


    return this.each( function() {

      $(this).after('<span class="chars-remaining"></span>');

      var max = $(this).attr('maxlength');

      // This will write the input's value on database
      var value = $(this).val().length;
      var result = max - value;
      $(this).next('.chars-remaining').text(result);

      // This is counter
      $(this).keyup(function() {
        var value = $(this).val().length;
        var result = max - value;
        $(this).next('.chars-remaining').text(result);
      });

    });
  }

}(jQuery));