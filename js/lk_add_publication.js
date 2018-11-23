$(document).ready(function () {

  if ($('.lk-add-publication').length) {

    $('.i-check').iCheck({
      checkboxClass: 'icheckbox_ee',
      radioClass: 'iradio_ee'
    });


    var $sectionsSelects = $('#sections-selects');

    if ($sectionsSelects.length) {

      $sectionsSelects.find('.section-select-wrapper').clone().appendTo($sectionsSelects);

      $sectionsSelects.on('click', '.control-add', function () {

        if ($sectionsSelects.find('.section-select-wrapper').length >= 4) return false;

        $(this).closest('.section-select-wrapper').clone().appendTo($sectionsSelects);

      });

      $sectionsSelects.on('click', '.control-delete', function () {

        $(this).closest('.section-select-wrapper').remove();

      });


    }

    $('.teaser-fields-table .form-textarea, .auto-resize').autoResize();

    $('.char-counter').charCounter();


    /////////////////////////

    $('#file-teaser-image').change(function () {

      if (this.files && this.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
          $('.teaser-fields-table .image-wrapper').css('background-image', "url('" + e.target.result + "')").addClass('active');
        };

        reader.readAsDataURL(this.files[0]);
      }

    });

    $('.teaser-fields-table .image-wrapper .control-delete').click(function () {

      $('.teaser-fields-table .image-wrapper').css('background-image', "none").removeClass('active');

      $('#file-teaser-image').val('');

    });

    $('#upload-teaser-image-button').click(function () {

      $('#file-teaser-image').trigger('click');

    });

    ///////////////////////

    $('#file-main-image').change(function () {

      if (this.files && this.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
          $('#main-image-wrapper').css('background-image', "url('" + e.target.result + "')").addClass('active');
        };

        reader.readAsDataURL(this.files[0]);
      }

    });

    $('#main-image-wrapper .control-delete').click(function (e) {

      $('#main-image-wrapper').css('background-image', "").removeClass('active');

      $('#file-main-image').val('');

      e.stopPropagation();

    });

    $('#main-image-wrapper').click(function () {

      $('#file-main-image').trigger('click');

    });


    //////////////////


    $('.tags-helper span').click(function () {

      $('#input-tags').val($('#input-tags').val() + $(this).text() + ', ');

    });


    ////////////////


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

            $('#invite-friends-counter').find('span').text(inviteFriendsApp.selected_items.length);

            $('#invite-friends-ids').val(inviteFriendsApp.selected_items.join(','));


          }),
          close: destroyInviteFiendsApp
        }
      });

    });








  }
});