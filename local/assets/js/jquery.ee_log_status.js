(function ($) {


  $.fn.ee_log_status = function() {
    return this.each(function() {

      var $el = $(this);

      $el.text($el.data('message-check')).css('background', '');

      setTimeout(function () {


        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth() + 1;
        var dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        var formattedToday = yyyy + '-' + mm + '-' + dd;


        var logUrl = 'https:///endoexpert.ru/upload/video-logs/'
            + $el.data('video-id') + '_'
            + $el.data('user-id') + '_'
            + formattedToday
            + '.log';

        $.get(logUrl).done(function () {

          $el.text($el.data('message-ok')).css('background', 'green');

        }).fail(function () {

          $el.text($el.data('message-fail')).css('background', 'red');

          $.post($el.data('fail-api-url'), {video_id : $el.data('video-id'), user_id: $el.data('user-id')});

        });


      }, 3000);

    });
  };


}(jQuery));