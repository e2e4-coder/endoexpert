$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'icheckbox_quacol',
    //increaseArea: '20%' // optional
  }).on('ifChanged', calcPoints);

  $('.lk-subscribe-settings table td').on('mouseover', function (e) {

    $(this).find('ins').off("mouseover").on("mouseover", function () {

      $(this).parent().parent().append('<div class="points-hint"><span>+'+$(this).prev().data('ee-points')+' EndoExpert баллов</span><br><span>+'+$(this).prev().data('points')+' баллов</span></div>');

    }).off("mouseout").on("mouseout", function () {

      $(this).parent().parent().find('.points-hint').remove();

    });

  });




  function calcPoints() {

    var total = 0;
    var ee_total = 0;

    $('.lk-subscribe-settings form tr').each(function () {

      var $checkboxes = $(this).find('input[type=checkbox]');

      if ($checkboxes.length) {

        var sum = 0;
        var ee_sum = 0;

        $checkboxes.filter(':checked').each(function () {

          sum += $(this).data('points');
          ee_sum += $(this).data('ee-points');


        });

        total += sum;
        ee_total += ee_sum;

        $(this).find('td:last-child').text(sum);


      }

    });

    $('#points-total').text(total);
    $('#ee-points-total').text(ee_total);



  }

});