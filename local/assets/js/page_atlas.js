
$(document).ready(function () {

  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());
    $('.ee-search-block-2 button[type=submit]').trigger('click');

  });

  $('.ee-search-block-2 .control-clear').click(function () {

    $('.ee-search-block-2 .form-text').val('');

  });

  $('.ee-search-block-2 .last-queries .expand-toggle').click(function () {

    $(this).parent().addClass('-expanded');

  });


  $('.char-counter').charCounter();


  $('textarea.char-counter').ee_autogrow();

  $('.ee-atlas-item__image').ee_lightbox({
    withRate: true
  });


});

