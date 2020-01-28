$(document).ready(function () {



  $('.ee-date-time-picker .swiper-slide').click(function () {

    if ($(this).hasClass('-disabled')) return;

    var $picker = $(this).closest('.ee-date-time-picker');

    $picker.find('.swiper-slide').not('.-disabled').removeClass('-selected');

    $(this).addClass('-selected');

    $picker.find('.js-date').val($(this).data('date'));

    $.getJSON($picker.data('api-url'), {

      action: 'get-times',
      date: $picker.find('.js-date').val()

    }, function (data) {

      if (data) {

        $picker.find('.times-list').html('');

        for (var i=0;i<data.length;i++) {

          if (data[i].disabled) {

            $picker.find('.times-list').append('<span class="-disabled">'+data[i].time+'</span> ');

          } else {

            $picker.find('.times-list').append('<span>'+data[i].time+'</span> ');
          }

        }

      }



    });


  });


  $('.ee-date-time-picker .times-list').on('click', 'span', function () {


    if ($(this).hasClass('-disabled')) return;

    var $picker = $(this).closest('.ee-date-time-picker');

    $picker.find('.times-list span').not('.-disabled').removeClass('-selected');

    $(this).addClass('-selected');

    $picker.find('.js-time').val($(this).text());


  });






});