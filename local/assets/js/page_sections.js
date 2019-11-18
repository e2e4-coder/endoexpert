$(document).ready(function () {

  $('.ee-sections-list .section-card').flip({trigger: 'hover'});

  $('.js-view-default').click(function () {

    $('.select-view-buttons button').removeClass('-selected');

    $(this).addClass('-selected');

    $('.ee-sections-list-v2').hide();
    $('.ee-sections-list').show();

  });

  $('.js-view-list').click(function () {

    $('.select-view-buttons button').removeClass('-selected');

    $(this).addClass('-selected');

    $('.ee-sections-list').hide();
    $('.ee-sections-list-v2').show();

  });

});