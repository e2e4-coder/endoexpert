$(document).ready(function () {

  var $tabs = $('.ee-comments-form .form-tabs .tab-item');

  $tabs.click(function () {

    $tabs.removeClass('-active');

    $(this).addClass('-active');

    $('#comment-to').val($(this).data('value'));


  });

  $('.ee-comments-form textarea').charCounter();











});