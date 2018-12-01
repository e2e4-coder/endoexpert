$(document).ready(function () {

  if ($('.lk-add-publication').length) {


    var addPublicationApp = new Vue({

      el: '#add-publication-app',

      data: {

        teaserImageSelected: false,
        mainImageSelected : false,
        typePoints: 0,
        typeName: '',
        pointsTable: [],

      },

      created : function() {

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

      },

      computed: {

        formatedDate : function () {

          var now = new Date();

          return now.ddmmyyy_hhii();

        },

        totalPoints : function () {

          var sum = 0;

          for (var i = 0;i<this.pointsTable.length;i++) sum += this.pointsTable[i].points;

          return sum;

        },

        totalEePoints : function () {

          var sum = 0;

          for (var i = 0;i<this.pointsTable.length;i++) sum += this.pointsTable[i].ee_points;

          return sum;

        }

      },

      mounted: function () {

        var self = this;

        $('.i-check').iCheck({
          checkboxClass: 'icheckbox_ee',
          radioClass: 'iradio_ee'
        });

        $('.type-table input[type=radio]').on('ifChecked', self.onTypeSelect).filter(':checked').trigger('ifChecked');

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



        $('#field-teaser-image-is-main').on('ifChecked', function () {

          $('#main-image-wrapper').css('background-image', $('.teaser-fields-table .image-wrapper').css('background-image'));

          self.mainImageSelected = true;

        }).on('ifUnchecked', function () {

          if (!$('#file-main-image').val()) {

            $('#main-image-wrapper').css('background-image', '').removeClass('active');

            self.mainImageSelected = false;
          }

        });


        $('.tags-helper span').click(function () {

          $('#input-tags').val($('#input-tags').val() + $(this).text() + ', ');

        });


        $('#checkbox-exclusive').on('ifChecked', function () {

          self.addPointsTableRow('exclusive', 'Добавлен экслюзивный материал', $(this).data('points'), $(this).data('ee-points'));

        }).on('ifUnchecked', function () {

          self.deletePointsTableRow('exclusive');


        });




      },

      methods : {

        onTypeSelect : function (e) {

          $('#points-sign').text('+' + $(e.target).data('points') + ' баллов').css('left', $(e.target).parent().position().left + 'px').show();

          this.addPointsTableRow('type-points', 'Публикация материала типа «'+$(e.target).closest('label').text().trim()+'»', $(e.target).data('points'), 0);

        },

        onTeaserImageChange: function (e) {

          this.teaserImageSelected = false;

          $('#field-teaser-image-is-main').iCheck('disable');

          if (this.checkImage(e.target)) {

            this.imageToBg(e.target, $('.teaser-fields-table .image-wrapper'));

            this.teaserImageSelected = true;

            $('#field-teaser-image-is-main').iCheck('enable');
          }

        },

        onTeaserImageDelete: function() {

          $('#file-teaser-image').val('');

          $('.teaser-fields-table .image-wrapper').css('background-image', '');

          this.teaserImageSelected = false;

          $('#field-teaser-image-is-main').iCheck('uncheck');
          $('#field-teaser-image-is-main').iCheck('disable');

        },


        onMainImageChange: function (e) {

          this.mainImageSelected = false;

          if (this.checkImage(e.target)) {

            this.imageToBg(e.target, $('#main-image-wrapper'));

            this.mainImageSelected = true;
            $('#field-teaser-image-is-main').iCheck('uncheck');
          }

        },

        onMainImageDelete: function(e) {


          $('#file-main-image').val('');

          $('#main-image-wrapper').css('background-image', '');

          this.mainImageSelected = false;
          $('#field-teaser-image-is-main').iCheck('uncheck');

          e.stopPropagation();

          return false;

        },



        checkImage: function (el) {

          return el.files && el.files[0] && (el.files[0].type === 'image/jpeg' || el.files[0].type === 'image/png');

        },

        imageToBg: function (el, $imageWrapper) {

          var reader = new FileReader();

          reader.onload = function (e) {

            $imageWrapper.css('background-image', "url('" + e.target.result + "')");

          };

          reader.readAsDataURL(el.files[0]);

        },

        onInviteFriendsClick: function () {

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

        },


        addPointsTableRow: function (key, title, points, ee_points) {

          var ob = {
            key: key,
            date: this.formatedDate,
            title: title,
            points: points,
            ee_points: ee_points

          };

          for (var i = 0;i<this.pointsTable.length;i++) {

            if (this.pointsTable[i].key === key) {


              this.pointsTable.splice(i, 1, ob);

              this.updatePointsTable();

              return;

            }

          }

          this.pointsTable.push(ob);

          this.updatePointsTable();



        },

        deletePointsTableRow: function (key) {

          for (var i = 0;i<this.pointsTable.length;i++) {

            if (this.pointsTable[i].key === key) {

              this.pointsTable.splice(i, 1);

              this.updatePointsTable();

              return;

            }

          }

        },


        updatePointsTable: function() {

          var $table = $('.points-table tbody');

          $table.find('tr').remove();

          for (var i = 0;i<this.pointsTable.length;i++) {

            $table.append('<tr><td>' +this.pointsTable[i].date+ '</td><td>' +this.pointsTable[i].title+ '</td><td>' +this.pointsTable[i].points+ '</td><td><input type="checkbox" class="i-check" disabled></td><td></td></tr>');

          }



          $('.points-table .i-check').iCheck({
            checkboxClass: 'icheckbox_ee',
            radioClass: 'iradio_ee'
          });


        },

        onTextChange: function (e) {

          this.deletePointsTableRow('text-length');

          var length = $(e.target).val().replace(/<\/?[^>]+>/gi, '').length;

          if (length > 4000) {

            this.addPointsTableRow('text-length', 'Добавление публикации с длиной текста более 4000 знаков', $(e.target).data('over-4000-points'), 0);

          } else if (length > 2000) {

            this.addPointsTableRow('text-length', 'Добавление публикации с длиной текста более 2000 знаков', $(e.target).data('over-2000-points'), 0);

          }


        },



      }


    });


  }
});