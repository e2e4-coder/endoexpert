
$(document).ready(function () {

  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());

  });


  $('.char-counter').charCounter();

  $('.ee-atlas-item__image').ee_lightbox({
    withRate: true
  });


});

