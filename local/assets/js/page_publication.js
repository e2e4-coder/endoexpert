$(document).ready(function () {

  $('.i-check-ee').iCheck({
    checkboxClass: 'icheckbox_ee',
    radioClass: 'iradio_ee'
  });


  $('.ee-locked-section .expand-button').click(function () {

    if ($(this).parent().hasClass('-unlocked') && $(this).find('>span').html() === 'раскрыть <i class="fas fa-angle-down"></i>') {$(this).find('>span').html('свернуть <i class="fas fa-angle-up"></i>')} else  {$(this).find('>span').html('раскрыть <i class="fas fa-angle-down"></i>')}

    $(this).parent().next('.locked-section-text').slideToggle()
  });

  $('.expandable-block button').click(function () {

    if ($(this).html() === 'раскрыть <i class="fas fa-angle-down"></i>') {$(this).html('свернуть <i class="fas fa-angle-up"></i>')} else  {$(this).html('раскрыть <i class="fas fa-angle-down"></i>')}

    $(this).parent().prev('.expandable-text').slideToggle()
  });


  $('#publication-rating-select').change(function () {

    $.post($(this).data('api-url'), {

      rating : $(this).val(),
      id : $(this).data('publication-id'),

    }, function () {


    });

  }).barrating({
    theme: 'fa-stars-gold',
    initialRating: $('#publication-rating-select').data('current-rating'),
    allowEmpty: true,
    emptyValue: 0,
  });


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

          $.ajax({
            url: '/local/assets/json/get-one.json',
            type: 'post',
            data: {topic_id: inviteFriendsApp.topic_id, friends : inviteFriendsApp.selected_items},
            cache: false,
            success: function(){
              $.magnificPopup.close();
              $.magnificPopup.open({
                items: {
                  src: '#invite-friends-popup-success'
                },
                type: 'inline',
                tClose: 'Закрыть (Esc)',
                tLoading: 'Загрузка...',

              });
            },
            error: function(){
              alert('error!');
            }
          });

        }),
        close: destroyInviteFiendsApp
      }
    });

  });


  $('.ee-invite-by-email-form form').submit(function (e) {

    e.preventDefault();

    if ($(this).find('.form-text').val().trim()) {

      $.ajax({
        url: '/local/assets/json/get-one.json',
        type: 'post',
        data: $(this).serialize(),
        cache: false,
        success: function(data){

          if (data == 1) {
            $.magnificPopup.open({
              items: {
                src: '#invite-by-email-popup-success'
              },
              type: 'inline',
              tClose: 'Закрыть (Esc)',
              tLoading: 'Загрузка...',

            });
          }

        },
        error: function(){
          alert('error!');
        }
      });

    }


    return false;

  });


  $('.sidebar-faces-slider').each(function () {


    var autoplay = $(this).data('autoplay-delay');

    autoplay = autoplay ? {delay: autoplay} : false;

    new Swiper (this, {

      loop: true,
      autoplay: autoplay

    });

  });


  $('#publication-subscribe-author').on('ifChanged', function (event) {

    $.post('/local/assets/json/get-one.json', {
      action : $(event.target).is(':checked') ? 'subscribe' : 'unsubscribe',
      author_id : $(event.target).data('author-id')
    }).done(function (data) {

      if (!data) {$(event.target).iCheck('uncheck');}

    }).fail(function(xhr, status, error) {
      $(event.target).iCheck('uncheck');
    });
  });

  $('#publication-subscribe-topic').on('ifChanged', function (event) {

    $.post('/local/assets/json/get-one.json', {
      action : $(event.target).is(':checked') ? 'subscribe' : 'unsubscribe',
      topic_id : $(event.target).data('topic-id')
    }).done(function (data) {

      if (!data) {$(event.target).iCheck('uncheck');}

    }).fail(function(xhr, status, error) {
      $(event.target).iCheck('uncheck');
    });
  });


  $('.toolbar-1 .ico-favorite, .toolbar-2 .ico-favorite, .toolbar-1 .ico-learn, .toolbar-2 .ico-learn').click(function () {

    var that = this;

    $.post($(this).data('api-url'), {
      element_id : $(this).data('element-id')
    }).done(function (data) {

      if (data == 1) {
        $(that).addClass('-active');
      }



    });


  });


  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
  });




});