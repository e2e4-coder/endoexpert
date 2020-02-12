$(document).ready(function () {


  $('.ee-upload-image-widget .image-wrapper').click(function () {

    $(this).parent().find('input').trigger('click');


  }).on('dragover', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).addClass('-dragging');

  }).on('dragleave', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).removeClass('-dragging');

  }).on('drop', function (e) {

    $(this).parent().find('input')[0].files = e.originalEvent.dataTransfer.files;

    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('-dragging');

    $(this).parent().find('input').trigger('change')

  });



  $('.ee-upload-image-widget input[type=file]').change(function () {

    var $imageWrapper = $(this).parent().find('.image-wrapper');

    if (checkImage($(this))) {

      fileImageToBg($(this), $imageWrapper);

      $imageWrapper.find('p').hide();

    } else {

      $(this).val('');

      $imageWrapper.css('background-image', '');

      $imageWrapper.find('p').show();

    }


  });


  function checkImage($el) {

    var el = $el[0];

    return el.files && el.files[0] && (el.files[0].type === 'image/jpeg' || el.files[0].type === 'image/png');

  }

  function fileImageToBg($el, $imageWrapper, callback) {

    var reader = new FileReader();

    reader.onload = function (e) {

      $imageWrapper.css('background-image', "url('" + e.target.result + "')");

      if (callback !== undefined) callback();

    };

    reader.readAsDataURL($el[0].files[0]);

  }

});