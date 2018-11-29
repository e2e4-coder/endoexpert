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

    $(this).prev('.form-placeholder').hide();

  }).on('blur', '.form-text, .form-textarea', function () {

    if (!$(this).val()) $(this).prev('.form-placeholder').show();

  }).find('.form-textarea, .form-text').each(function () {


    if ($(this).val()) {$(this).prev('.form-placeholder').hide();}


  });


  $('.endoexpert-anketa').on('change', '.form-item select', function () {

    if ($(this).val()) {$(this).prev('.form-placeholder').hide()} else {$(this).prev().show();}

  }).on('blur', '.form-item select', function () {

    if (!$(this).val()) $(this).prev('.form-placeholder').show();

  }).find('.form-item select').each(function () {

    if ($(this).val()) {$(this).prev('.form-placeholder').hide();}


  });


  $('.field-spinner').each(function () {

    $(this).spinner({
      min: $(this).data('min'),
      max: $(this).data('max'),
      spin: function(event, ui) {

        $(event.target).val(ui.value);

        buildBirthDate();
      }
    })

  });


  $('.form-item-add-more a').click(function () {

    $(this).parent().prev().find('.form-item').eq(0).clone().appendTo($(this).parent().prev());

  });

  $('.field-tags span').click(function () {

    var $elem = $(this).parent().prev();

    $elem.val($elem.val() + $(this).text() + ', ');

    $elem.prev().hide();


  });

  function buildBirthDate() {

    $('#field-birth-date').val($('#field-birth-day').val() + '.' + $('#field-birth-month').val() + '.' + $('#field-birth-year').val());
  };

  $('#field-birth-month').change(buildBirthDate);





  $.formUtils.addValidator({
    name : 'only_letters',
    validatorFunction : function(value, $el, config, language, $form) {

      var regexp = /^[a-zA-Zа-яА-ЯёЁ]*$/;

      return regexp.test(value);

    },
    errorMessage : 'Допускаются только буквы ',
    errorMessageKey: 'badRusOnly'
  });

  $.validate({
    lang : 'ru'
  });








});