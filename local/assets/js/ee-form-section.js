$(document).ready(function () {

  $('.ee-form-section .expand-toggle').click(function () {

    $(this).toggleClass('-expanded');
    $(this).closest('.ee-form-section').find('.section-body').slideToggle();


  });

});