(function ($) {


  $.fn.ee_autogrow = function() {
    return this.each(function() {
      var textarea = this;

      textarea.initialHeight = textarea.scrollHeight;

      $.fn.ee_autogrow.resize(textarea);
      $(textarea).focus(function() {
        textarea.interval = setInterval(function() {
          $.fn.ee_autogrow.resize(textarea);
        }, 100);
      }).blur(function() {
        clearInterval(textarea.interval);
      });
    });
  };
  $.fn.ee_autogrow.resize = function(textarea) {
    var lineHeight = parseInt($(textarea).css('line-height'), 10);
    var lines = textarea.value.split('\n');
    var columns = textarea.cols;
    var lineCount = 0;
    $.each(lines, function() {
      lineCount += Math.ceil(this.length / columns) || 1;
    });
    var height = lineHeight * (lineCount + 1);

    if (height > textarea.initialHeight) {
      $(textarea).css('height', height+5);
    }


  };



}(jQuery));