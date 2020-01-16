$(document).ready(function () {

  $('.i-check-ee').iCheck({
    checkboxClass: 'icheckbox_ee',
    radioClass: 'iradio_ee'
  });


  $('.ee-locked-section .expand-button').click(function () {

    if ($(this).closest('.ee-locked-section').hasClass('-unlocked') && $(this).find('>span').html() === 'раскрыть <i class="fas fa-angle-down"></i>') {

      $(this).find('>span').html('свернуть <i class="fas fa-angle-up"></i>');

      $(this).closest('.ee-locked-section').prev().addClass('-expanded');

    } else  {

      $(this).find('>span').html('раскрыть <i class="fas fa-angle-down"></i>');

      $(this).closest('.ee-locked-section').prev().removeClass('-expanded');

    }

    $(this).parent().next('.locked-section-text').slideToggle()
  });

  $('.expandable-block button').click(function () {

    if ($(this).html() === 'раскрыть <i class="fas fa-angle-down"></i>') {$(this).html('свернуть <i class="fas fa-angle-up"></i>')} else  {$(this).html('раскрыть <i class="fas fa-angle-down"></i>')}

    $(this).parent().prev('.expandable-text').slideToggle();

    $(this).parent().parent().toggleClass('-collapsed');
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

  /*

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

  */

  $('.sidebar-faces-slider').each(function () {


    var autoplay = $(this).data('autoplay-delay');

    autoplay = autoplay ? {delay: autoplay} : false;

    new Swiper (this, {

      loop: true,
      autoplay: autoplay

    });

  });


  $('#publication-subscribe-author').on('change', function (event) {

    $.post('/local/assets/json/get-one.json', {
      action : $(event.target).is(':checked') ? 'subscribe' : 'unsubscribe',
      author_id : $(event.target).data('author-id')
    }).done(function (data) {

      if (!data) {$(event.target).iCheck('uncheck');}

    }).fail(function(xhr, status, error) {
      $(event.target).iCheck('uncheck');
    });
  });

  $('#publication-subscribe-topic').on('change', function (event) {

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

      $(that).toggleClass('-active', data == 1);



    });


  });



  $('.toolbar-2 .attachments-button').click(function () {

    var $i = $(this).find('i.fas');

    if ($i.hasClass('fa-angle-up')) {

      $i.removeClass('fa-angle-up').addClass('fa-angle-down');

      $('.attachments-list').slideUp();

    } else {

      $i.removeClass('fa-angle-down').addClass('fa-angle-up');

      $('.attachments-list').slideDown();
    }



  });

  $('.toolbar-2 .ico-link').click(function () {




  });


  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
  });


  $('.publication-expert-comments .expand-button').click(function () {

    $(this).parent().toggleClass('-expanded');

    if ($(this).text() === 'Развернуть') {$(this).text('Свернуть')} else {$(this).text('Развернуть')}


  });


  var recommendSliderDelay = $('#publication-page-recommend-slider').data('autoplay-delay');

  recommendSliderDelay = recommendSliderDelay ? {delay: recommendSliderDelay} : false;

  var recommendSlider = new Swiper ('#publication-page-recommend-slider', {


    slidesPerView: 3,
    slidesPerGroup: 3,
    loopedSlides: 3,
    spaceBetween: 14,
    loop: false,
    navigation: {
      nextEl: '#publication-page-recommend-slider-next',
      prevEl: '#publication-page-recommend-slider-prev',
    },

    autoplay: recommendSliderDelay,

    breakpoints: {

      1023: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 10
      }
    }
  });


  var $timer = $('.ee-timer');
  var targetDate = new Date($timer.data('date'));
  var seconds = Math.round((targetDate.getTime() - Date.now())/1000);

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  function renderTime() {

    if (seconds > 0) {

      seconds--;

      var tmp = seconds;

      var d = Math.floor(tmp/60/60/24);
      tmp = tmp - d*60*60*24;

      var h = Math.floor(tmp/60/60);
      tmp = tmp - h*60*60;

      var m = Math.floor(tmp/60);
      var s = tmp - m*60;

      d = pad(d, 3);
      h = pad(h, 2);
      m = pad(m, 2);
      s = pad(s, 2);

      $timer.find('.-s1').text(s.charAt(0));
      $timer.find('.-s2').text(s.charAt(1));

      $timer.find('.-m1').text(m.charAt(0));
      $timer.find('.-m2').text(m.charAt(1));

      $timer.find('.-h1').text(h.charAt(0));
      $timer.find('.-h2').text(h.charAt(1));

      $timer.find('.-d1').text(d.charAt(0));
      $timer.find('.-d2').text(d.charAt(1));
      $timer.find('.-d3').text(d.charAt(2));



    }
  }

  renderTime();

  setInterval(renderTime, 1000);


  $('.js-nominate').click(function (e) {

    $('.ee-nominate-popup').toggle();

    e.preventDefault();
    e.stopPropagation();
    return false;

  });

  $(document).click(function (e) {

    if (!$(e.target).closest('.ee-nominate-popup').length) $('.ee-nominate-popup').hide();


  });



});