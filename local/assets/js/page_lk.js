$(document).ready(function () {

  $('.ee-doctor-teaser .ico-edit').click(function (e) {

    e.preventDefault();


    $(this).parent().addClass('-edit');

    $(this).parent().find('.-edit-hide').hide();
    $(this).parent().find('.-edit-show').show();


  });

  $('.ee-doctor-teaser .ico-cancel').click(function (e) {

    e.preventDefault();

    $(this).parent().removeClass('-edit');

    $(this).parent().find('.-edit-show').hide();
    $(this).parent().find('.-edit-hide').show();


  });


  $('.ee-doctor-teaser .js-price, .ee-doctor-teaser .js-discount').change(function () {


    var price = parseInt($('.ee-doctor-teaser .js-price').val());
    var discount = parseInt($('.ee-doctor-teaser .js-discount').val());

    var oldPrice = Math.round(price / (1 - discount/100));

    $('.ee-doctor-teaser .js-old-price').text(oldPrice + 'р');



  });

  $('.ee-doctor-teaser .js-upload-graph').click(function (e) {

    e.preventDefault();

    $('.ee-doctor-teaser .js-upload-graph-file').trigger('click');

  });

  $('.ee-doctor-teaser .js-upload-graph-file').change(function () {

    $('.ee-doctor-teaser .js-upload-graph').html('<i>' + this.files[0].name + '</i>');

  });


});

