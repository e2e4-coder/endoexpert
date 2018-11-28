$(document).ready(function () {

  $('.i-check').iCheck({
    checkboxClass: 'icheckbox_quacol',
    radioClass: 'icheckbox_quacol',
    //increaseArea: '20%' // optional
  });


  var albumNameLength = parseInt($('#album-name').attr('maxlength'));

  $('#album-name-char-counter').text(albumNameLength);

  $('#album-name').on('input', function () {

    $('#album-name-char-counter').text(albumNameLength - $(this).val().length);

  });

  $('.date-picker').datepicker($.datepicker.regional['ru']);

  $('#file-watermark-select').click(function () {

    $('#file-watermark').trigger('click').change(function () {

      fileToImg(this, $('#watermark-preview-wrapper').find('img'), 0);

      $('#selected-watermark-id').val('');

      $('#watermark-preview-wrapper').show();





    });

  });

  $('#upload-album-button').click(function () {

    $(this).next().trigger('click').change(function () {

      $(this).parent().find('.image-item').not('.upload-button').remove();

      if (this.files) {

        for (var i=0;i<this.files.length;i++) {

          var $elem = $('<div class="image-item"><img><input maxlength="255" type="text" name="photo_desc['+i+']" placeholder="Введите описание фото..."></div>').prependTo($(this).parent());

          fileToImg(this, $elem.find('img'), i);

        }

      }


    });

  });

  $('#upload-album-cover-button').click(function () {

    $(this).next().trigger('click').change(function () {


      fileToImg(this, $(this).parent().find('img'), 0);

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

  $('.select-link').find('a').click(function () {

    $('.select-link-options').hide();
    $(this).next().show();

  });

  $('.select-link-options').find('div').click(function () {

    $(this).parent().prev().prev().val($(this).data('value'));
    $(this).parent().prev().text($(this).text());
    $(this).parent().hide();
  });

  $('.tags-helper span').click(function () {

    var $input = $(this).parent().prev();

    $input.val($input.val() + $(this).text() + ', ')

  });


  var $selectList = $('.watermark-select-list');

  $selectList.on('click', '.list-item', function () {

    $('#select-watermark-popup-ok').prop('disabled', false);

    $selectList.find('.list-item').removeClass('-selected');

    $(this).addClass('-selected');

  });


  $('#watermark-select').click(function () {



    $.magnificPopup.open({
      items: {
        src: '#select-watermark-popup'
      },
      type: 'inline',
      tClose: 'Закрыть (Esc)',
      tLoading: 'Загрузка...',
      modal: true,
      callbacks : {
        open : function () {

          $selectList.html('');

          $.getJSON('/local/assets/json/watermarks.json', function (data) {

            if (data) {

              for ( var i = 0; i < data.length; i++) {

                $selectList.append('<div class="list-item" data-id="'+data[i].id+'" data-path="'+data[i].path+'"><img src="'+data[i].path+'"></div>');

              }

            }

          });



        }
      }
    });

  }).trigger('click');

  $('#select-watermark-popup-cancel').click($.magnificPopup.close);

  $('#select-watermark-popup-ok').click(function () {

    var $selectedItem = $selectList.find('.-selected');

    $('#file-watermark').val('');
    $('#selected-watermark-id').val($selectedItem.data('id'));
    $('#watermark-preview-wrapper').show().find('img').attr('src', $selectedItem.data('path'));
    $.magnificPopup.close();

  });



});