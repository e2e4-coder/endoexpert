$(document).ready(function () {



  if ($('.lk-add-publication').length) {

    Date.prototype.ddmmyyy_hhii = function() {
      var mm = this.getMonth() + 1; // getMonth() is zero-based
      var dd = this.getDate();
      var yyyy = this.getFullYear();

      var hh = this.getHours();
      var ii = this.getMinutes();

      return [
        (dd>9 ? '' : '0') + dd,
        (mm>9 ? '' : '0') + mm,
        this.getFullYear(),
      ].join('.') + '&nbsp;&nbsp;&nbsp;&nbsp;' + [
        (hh>9 ? '' : '0') + hh,
        (ii>9 ? '' : '0') + ii,
      ].join(':');

    };

    var pointsTable = [];
    var totalPoints = 0;
    var totalEePoints = 0;


    $('.i-check-ee').iCheck({
      checkboxClass: 'icheckbox_ee',
      radioClass: 'iradio_ee'
    });

    $('.teaser-fields-table .form-textarea, .auto-resize').autoResize();

    $('.char-counter').charCounter();

    var $fieldTags = $('#input-tags');

    $('#row-tags .tags-helper span').click(function () {

      $fieldTags.val($fieldTags.val() + $(this).text() + ', ');

    });

    /////////////////////////////////

    $('.type-table input[type=radio]').on('ifChecked', onTypeSelect).filter(':checked').trigger('ifChecked');

    function onTypeSelect(e) {

      var typeName = $(e.target).closest('label').text().trim();

      $('#field-rubric-name').val(typeName);
      $('#rubric-name').text(typeName);

      $('#points-sign').text('+' + $(e.target).data('points') + ' баллов').css('left', $(e.target).parent().position().left + 'px').show();

      addPointsTableRow('type-points', 'Публикация материала типа «'+typeName+'»', $(e.target).data('points'), 0);

    }

    ///////////////////

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

    ///////////////////

    var $drugsInputs = $('#drugs-inputs');

    if ($drugsInputs.length) {

      //$drugsInputs.find('.input-wrapper').clone().appendTo($drugsInputs);

      $drugsInputs.on('click', '.control-add', function () {

        if ($drugsInputs.find('.input-wrapper').length >= 4) return false;

        $(this).closest('.input-wrapper').clone().appendTo($drugsInputs).find('input').val('');

      });

      $drugsInputs.on('click', '.control-delete', function () {

        $(this).closest('.input-wrapper').remove();

      });


      $('#row-drugs .tags-helper span').click(function () {

        var that = this;

        $drugsInputs.find('input').each(function () {

          if (!$(this).val().trim()) {

            $(this).val($(that).text());

            return false;

          }

        });

      });


    }

    ////////////////////////

    var $fileTeaserImage = $('#file-teaser-image');
    var $fieldTeaserImageIsMain = $('#field-teaser-image-is-main');
    var $teaserImageWrapper = $('.teaser-fields-table .image-wrapper');

    $('#upload-teaser-image-button').click(function () {

      $fileTeaserImage.trigger('click');

    });

    $fileTeaserImage.change(function (e) {

      $fieldTeaserImageIsMain.iCheck('disable');

      if (checkImage($(this))) {

        fileImageToBg($(this), $teaserImageWrapper);

        $teaserImageWrapper.addClass('-active');

        $fieldTeaserImageIsMain.iCheck('enable');
      }
    });

    $teaserImageWrapper.find('.control-delete').click(function () {


      $fileTeaserImage.val('');
      $teaserImageWrapper.css('background-image', '');

      $teaserImageWrapper.removeClass('-active');

      $fieldTeaserImageIsMain.iCheck('uncheck');
      $fieldTeaserImageIsMain.iCheck('disable');



    });


    $teaserImageWrapper.on('dragover', function (e) {

      e.preventDefault();
      e.stopPropagation();

      $(this).addClass('-dragging');

    }).on('dragleave', function (e) {

      e.preventDefault();
      e.stopPropagation();

      $(this).removeClass('-dragging');

    }).on('drop', function (e) {

      $fileTeaserImage[0].files = e.originalEvent.dataTransfer.files;

      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('-dragging');

      $fileTeaserImage.trigger('change')

    });


    ////////////////////////////////

    var $fileMainImage = $('#file-main-image');
    var $mainImageWrapper = $('#main-image-wrapper');

    $mainImageWrapper.click(function () {

      $fileMainImage.trigger('click');

    });

    $fileMainImage.change(function (e) {

      if (checkImage($(this))) {

        fileImageToBg($(this), $mainImageWrapper);

        $mainImageWrapper.addClass('-active');

        $fieldTeaserImageIsMain.iCheck('uncheck');

      }
    });

    $mainImageWrapper.find('.control-delete').click(function (e) {

      $fileMainImage.val('');
      $mainImageWrapper.css('background-image', '').removeClass('-active');

      $fieldTeaserImageIsMain.iCheck('uncheck');

      e.stopPropagation();
      return false;

    });

    $mainImageWrapper.on('dragover', function (e) {

      e.preventDefault();
      e.stopPropagation();

      $(this).addClass('-dragging');

    }).on('dragleave', function (e) {

      e.preventDefault();
      e.stopPropagation();

      $(this).removeClass('-dragging');

    }).on('drop', function (e) {

      $fileMainImage[0].files = e.originalEvent.dataTransfer.files;

      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('-dragging');

      $fileMainImage.trigger('change')

    });

    /////////////////////////////


    $fieldTeaserImageIsMain.on('ifChecked', function () {

      $mainImageWrapper.css('background-image', $teaserImageWrapper.css('background-image')).addClass('-active');

    }).on('ifUnchecked', function () {

      if (!$fileMainImage.val()) {

        $mainImageWrapper.css('background-image', '').removeClass('-active');

      }

    });


    ////////////////////////////


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

            $('#invite-friends-counter').find('span').text(inviteFriendsApp.selected_fio_list);

            $('#invite-friends-ids').val(inviteFriendsApp.selected_items.join(','));


          }),
          close: destroyInviteFiendsApp
        }
      });

    });

    ////////////////////////////


    $('#checkbox-exclusive').on('ifChecked', function () {

      addPointsTableRow('exclusive', 'Добавлен экслюзивный материал', $(this).data('points'), $(this).data('ee-points'));

    }).on('ifUnchecked', function () {

      deletePointsTableRow('exclusive');

    });


    ////////////////////////////////////////

    $('#field-main-text').change(function (e) {

      deletePointsTableRow('text-length');

      var length = $(this).val().replace(/<\/?[^>]+>/gi, '').length;

      if (length > 4000) {

        addPointsTableRow('text-length', 'Добавление публикации с длиной текста более 4000 знаков', $(this).data('over-4000-points'), 0);

      } else if (length > 2000) {

        addPointsTableRow('text-length', 'Добавление публикации с длиной текста более 2000 знаков', $(this).data('over-2000-points'), 0);

      }


    });


    ////////////////////////////

    var $controlYt = $('#control-field-youtube-link');
    var $rowYt = $('#row-field-yotube-link');
    var $fieldYt = $('#field-youtube-link');

    if ($fieldYt.val().trim()) {

      $controlYt.hide();
      $rowYt.show();

    } else {

      $controlYt.show();
      $rowYt.hide();
    }

    $controlYt.click(function () {

      $controlYt.hide();
      $rowYt.show();
      $fieldYt.focus();

    });


    /////////////////////////////

    var $nlWrapper = $('#nl-wrapper');

    $nlWrapper.find('.field-toggle').click(function () {

      if ($nlWrapper.find('input').is(':hidden')) {


        $nlWrapper.find('select').hide();
        $nlWrapper.find('input').show().focus();

        $(this).text('Выбрать из списка');

      } else {

        $nlWrapper.find('input').hide();
        $nlWrapper.find('select').show();

        $(this).text('Ввести свой вариант');

      }


    });

    ///////////////////////////




    $('#attach-files-list').on('click', '.control-delete', function () {

      $(this).closest('tr').remove();

    });

    $('#control-attach-image, #control-attach-pdf, #control-attach-video, #control-attach-file').click(function () {

      var that = this;

      $('#attach-files-list tr:hidden').remove();

      var $row = $('<tr style="display: none">\n' +
          '                                            <td>\n' +
          '                                                <input type="file" name="' + $(this).data('input-name') + '[]" accept="' + $(this).data('accept') + '">\n' +
          '                                                <span class="item-icon"></span>\n' +
          '                                            </td>\n' +
          '                                            <td class="item-name"></td>\n' +
          '                                            <td><span class="control-delete"></span></td>\n' +
          '\n' +
          '                                        </tr>').appendTo('#attach-files-list');


      $row.find('input').change(function () {



        $row.find('.item-name').text(this.files[0].name);

        if ($(that).attr('id') === 'control-attach-image' && checkImage($(this))) {

          fileImageToBg($(this), $row.find('.item-icon'));

          $row.show();

          return;

        } else if ($(that).attr('id') === 'control-attach-pdf' && checkPdf($(this))) {

          $row.find('.item-icon').addClass('-pdf');

          $row.show();

          return;

        } else if ($(that).attr('id') === 'control-attach-video' && checkMp4($(this))) {

          $row.find('.item-icon').addClass('-mp4');

          $row.show();

          return;

        } else if ($(that).attr('id') === 'control-attach-file') {

          $row.show();

          return;

        }


        $(this).val('');



      }).trigger('click');

    });




    ///////////////////////////

    function fileImageToBg($el, $imageWrapper) {

      var reader = new FileReader();

      reader.onload = function (e) {

        $imageWrapper.css('background-image', "url('" + e.target.result + "')");

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

    function updatePointsTable() {

      var $table = $('.points-table tbody');

      $table.find('tr').remove();

      totalPoints = 0;
      totalEePoints = 0;

      for (var i = 0;i<pointsTable.length;i++) {

        $table.append('<tr><td>' +pointsTable[i].date+ '</td><td>' +pointsTable[i].title+ '</td><td>' +pointsTable[i].points+ '</td><td><input type="checkbox" class="i-check-ee" disabled></td><td></td></tr>');

        totalPoints += pointsTable[i].points;
        totalEePoints += pointsTable[i].ee_points;

      }

      $('#total-points').text('+' + totalPoints + ' баллов');
      $('#total-ee-points').text('+' + totalEePoints + ' баллов EndoExpert');


      $('.points-table .i-check-ee').iCheck({
        checkboxClass: 'icheckbox_ee',
        radioClass: 'iradio_ee'
      });

    }


    function deletePointsTableRow(key) {

      for (var i = 0;i<pointsTable.length;i++) {

        if (pointsTable[i].key === key) {

          pointsTable.splice(i, 1);

          updatePointsTable();

          return;

        }

      }

    }

    function addPointsTableRow(key, title, points, ee_points) {

      var now = new Date();

      var ob = {
        key: key,
        date: now.ddmmyyy_hhii(),
        title: title,
        points: points,
        ee_points: ee_points

      };

      for (var i = 0;i<pointsTable.length;i++) {

        if (pointsTable[i].key === key) {

          pointsTable.splice(i, 1, ob);

          updatePointsTable();

          return;

        }

      }

      pointsTable.push(ob);

      updatePointsTable();

    }


  }
});