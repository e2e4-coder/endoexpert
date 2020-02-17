
$(document).ready(function () {


  $('.ee-search-block-2 .last-queries span').click(function () {

    $('.ee-search-block-2 .form-text').val($(this).text());

  });

  $('.ee-search-block-2 .last-queries .expand-toggle').click(function () {

    $(this).parent().addClass('-expanded');

  });


});

