$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'iradio_quacol',
    //increaseArea: '20%' // optional
  });

  $('.endoexpert-anketa select').change(function () {

    if ($(this).val() ==='0') {$(this).addClass('-empty')} else {$(this).removeClass('-empty')}

  });

  $('#photo-upload-link').click(function () {

    $('#anketa-photo-upload').trigger('click').change(function () {


      fileToImg(this, $('#photo-placeholder'), 0);

    });

  });

  function fileToImg(input, $img, index) {
    if (input.files && input.files[index]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $img.attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[index]);
    }
  }


  $('.endoexpert-anketa').on('focus', '.form-text, .form-textarea', function () {

    $(this).prev().hide();

  }).on('blur', '.form-text, .form-textarea', function () {

    if (!$(this).val()) $(this).prev().show();

  });


  $('.form-item-add-more a').click(function () {

    $(this).parent().prev().find('.form-item').eq(0).clone().appendTo($(this).parent().prev());

  });

  $('.field-tags span').click(function () {

    var $elem = $(this).parent().prev();

    $elem.val($elem.val() + $(this).text() + ', ');

    $elem.prev().hide();


  });






});