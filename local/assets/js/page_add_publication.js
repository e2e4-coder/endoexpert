$(document).ready(function () {

  $('.form-item-categories').on('click', '.-add',function () {

    var $rows = $('.form-item-categories .select-wrapper');

    if ($rows.length < 4) {

      $rows.eq(0).clone().appendTo($('.form-item-categories .col-2')).find('option').eq(0).text('не выбрано');

    }

  }).on('click', '.-del',function () {

    $(this).closest('.select-wrapper').remove();

  });


  /////////////

  $('.form-teaser-block textarea').charCounter();

  var $teaserImage = $('.teaser-image');

  $teaserImage.click(function () {

    $('#input-preview-image').trigger('click');

  }).on('dragover', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).addClass('-dragging');

  }).on('dragleave', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).removeClass('-dragging');

  }).on('drop', function (e) {

    $('#input-preview-image')[0].files = e.originalEvent.dataTransfer.files;

    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('-dragging');

    $('#input-preview-image').trigger('change')

  });

  $('#input-preview-image').change(function () {

    if (checkImage($(this))) {

      fileImageToBg($(this), $teaserImage);

      $teaserImage.find('p').hide();

    } else {

      $(this).val('');

      $teaserImage.find('p').show();

    }


  });


  $('.form-teaser-block').on('click', '.-author-name .-add', function () {

    $(this).closest('.author-wrapper').clone().appendTo('.form-teaser-block .col-2').find('input, textarea').val('');

    $('.form-teaser-block .author-wrapper').each(function () {

      $(this).find('label span').text($(this).index()-1);

    });

  });


  //////////////////////////////


  $('.images-upload-fields-list').on('click', '.field-image', function (e) {

    if ($(this).parent().hasClass('-active')) {

      e.preventDefault();
      return false;

    }

    $(this).prev('input').trigger('click');

  }).on('change', 'input[type=file]', function () {

    if (checkImage($(this))) {

      $(this).parent().clone().appendTo('.images-upload-fields-list').find('textarea').val('');

      fileImageToBg($(this), $(this).next());



      $(this).parent().addClass('-active');

    } else {

      $(this).val('');
      $(this).parent().removeClass('-active');

    }

  }).on('click', '.control-delete', function (e) {

    e.stopPropagation();

    $(this).closest('.field-item').remove();

    return false;

  }).on('dragover', '.field-image', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).addClass('-dragging');

  }).on('dragleave', '.field-image', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).removeClass('-dragging');

  }).on('drop', '.field-image', function (e) {

    $(this).prev()[0].files = e.originalEvent.dataTransfer.files;

    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('-dragging');

    $(this).prev().trigger('change');

  });

/////////////////////////


  $('.files-upload-wrapper').on('click', '.file-preview', function (e) {

    if ($(this).parent().hasClass('-active')) {

      e.preventDefault();
      return false;

    }

    $(this).prev('input').trigger('click');

  }).on('change', 'input[type=file]', function (e) {



    if (checkMime(e.target.files[0], $(this).attr('accept'))) {

      $(this).next().find('.file-name').text(e.target.files[0].name);
      $(this).next().find('.file-size').text('('+humanFilesize(e.target.files[0].size)+')');


      $(this).parent().addClass('-active');

    } else {

      $(this).val('');
      $(this).parent().removeClass('-active');

    }

  }).on('click', '.control-delete', function (e) {

    e.stopPropagation();

    $(this).closest('.file-item').removeClass('-active').find('input[type=file]').val('');

    return false;

  }).on('dragover', '.file-preview', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).addClass('-dragging');

  }).on('dragleave', '.file-preview', function (e) {

    e.preventDefault();
    e.stopPropagation();

    $(this).removeClass('-dragging');

  }).on('drop', '.file-preview', function (e) {

    $(this).prev()[0].files = e.originalEvent.dataTransfer.files;

    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('-dragging');

    $(this).prev().trigger('change');

  }).on('click', '.-from-computer', function () {

    $(this).closest('.file-item').find('input[type=file]').trigger('click');

  }).on('click', '.-add-more', function () {

    $(this).closest('.file-item').clone().appendTo($(this).closest('.files-upload-wrapper'));

  });


  ////////////////

  $('.form-section.-conclusion input[type=text]').charCounter();


  ///////////////

  $('.black-selects').on('click', '.-add-more', function () {

    $(this).parent().clone().appendTo($(this).parent().parent()).find('select').val('');

  });


  ///////////////////


  $('#invite-friends-button').click(function () {

    $.magnificPopup.open({
      items: {
        src: '#invite-friends-popup'
      },
      modal: true,
      type: 'inline',
      tClose: 'Закрыть (Esc)',
      tLoading: 'Загрузка...',
      callbacks: {
        open: initInviteFiendsApp(function () {

          $.magnificPopup.close();

          $('#invite-friends-list').val(inviteFriendsApp.selected_fio_list);

          $('#invite-friends-ids').val(inviteFriendsApp.selected_items.join(','));


        }),
        close: destroyInviteFiendsApp
      }
    });

  });



  ////////////////

  $('.buttons-switcher button').click(function () {

    $(this).parent().find('input').val($(this).data('value'));

    $('.buttons-switcher button').removeClass('-active');

    $(this).addClass('-active')
  });


  /////////////

  includeHTML('/local/assets/html_includes/chat-app.html', document.getElementById('chat-app'), function () {

    var $chatPopup = $('#chat-popup');

    $chatPopup.on('click', '.btn-close', function () {

      $chatPopup.fadeOut();
      destroyChatApp();

    });

    $('#dispute-button').click(function () {

      if ($chatPopup.is(':hidden')) {

        initChatApp();
        $chatPopup.fadeIn();

      } else {

        $chatPopup.fadeOut();
        destroyChatApp();
      }

    });


  });

  //////////////////


  function fileImageToBg($el, $imageWrapper, callback) {

    var reader = new FileReader();

    reader.onload = function (e) {

      $imageWrapper.css('background-image', "url('" + e.target.result + "')");

      if (callback !== undefined) callback();

    };

    reader.readAsDataURL($el[0].files[0]);

  }


  function checkImage($el) {

    var el = $el[0];

    return el.files && el.files[0] && (el.files[0].type === 'image/jpeg' || el.files[0].type === 'image/png');

  }

  function checkPdf($el) {

    var el = $el[0];

    return el.files && el.files[0] && el.files[0].type === 'application/pdf';

  }

  function checkMp4($el) {

    var el = $el[0];

    return el.files && el.files[0] && el.files[0].type === 'video/mp4';

  }

  function checkMime(file, accept) {

    accept = accept.split(',');

    return accept.indexOf(file.type) > -1;

  }

  function humanFilesize (bytes, precision) {
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    if (typeof precision === 'undefined') precision = 1;
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
    var number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
  }



});