$(document).ready(function () {

  var Nav = $('.main-menu').hcOffcanvasNav({
    maxWidth: 1024,
    position: 'right',
    insertClose : false,
    labelBack : 'Назад',


  });

  Nav.on('open', function () {

    $('.header-top .right-buttons').clone().appendTo('.nav-wrapper-0 >.nav-content');


  });

  Nav.on('close', function () {

    $('.nav-wrapper .nav-content .right-buttons').remove();

  });

  //Nav.open();

  $('#btn-mobile-search-toggle').click(function () {

    $('.endoexpert-header .search-block').toggle();



  });




  var $pageWrapper = $('.page-wrapper');

  var $header = $('.endoexpert-header');

  var $bxPanel = $('#bx-panel');

  $(document).on('scroll', function () {

    var offset = $(document).scrollTop();

    if (offset === 0) {
      $header.addClass('-top-visible');
    } else {
      $header.removeClass('-top-visible');
    }

    var panelHeight = $bxPanel.length ? $bxPanel.height() : 10;

    if (offset > panelHeight) {

      $header.addClass('-fixed');

      $pageWrapper.css('padding-top', $header.height() + 10 + 'px')



    } else {

      $header.removeClass('-fixed');
      $pageWrapper.css('padding-top', '0')
    }

  });


  var $fixedBtn = $('#fixed-block .fixed-btn-2');

  if ($fixedBtn.length){

    $fixedBtn.click(function () {

      if ($(this).hasClass('-up')) {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;

      }

      if ($(this).hasClass('-down')) {

        $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
        return false;



      }


      var $swipeBlock = $(this).next();

      $swipeBlock.css('top', '-' + parseInt($swipeBlock.height()/2) + 'px');

      $(this).parent().toggleClass('-active');

      var that = this;

      $fixedBtn.filter(function () {

        if (this !== that) $(this).parent().removeClass('-active');

      });

    });


    $('.i-check-ee').iCheck({
      checkboxClass: 'icheckbox_ee',
      radioClass: 'iradio_ee'
    });


  }



  var footerSponsorsSlider = new Swiper ('#footer-sponsors-slider', {

    navigation: {
      nextEl: '#footer-sponsors-slider-next',
      prevEl: '#footer-sponsors-slider-prev',
    },

    spaceBetween: 20,
    slidesPerView: 'auto'

  });

  var footerPartnersSlider = new Swiper ('#footer-partners-slider', {

    navigation: {
      nextEl: '#footer-partners-slider-next',
      prevEl: '#footer-partners-slider-prev',
    },

    spaceBetween: 20,
    slidesPerView: 'auto'

  });

  var sponsorSliderDelay = $('#sponsors-slider').data('autoplay-delay');

  sponsorSliderDelay = sponsorSliderDelay ? {delay: sponsorSliderDelay} : false;

  var sponsorSlider = new Swiper ('#sponsors-slider', {


    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '#sponsors-slider-next',
      prevEl: '#sponsors-slider-prev',
    },

    autoplay: sponsorSliderDelay,


  });


  var partnersSliderDelay = $('#partners-slider').data('autoplay-delay');

  partnersSliderDelay = partnersSliderDelay ? {delay: partnersSliderDelay} : false;

  var partnersSlider = new Swiper ('#partners-slider', {


    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    navigation: {
      nextEl: '#partners-slider-next',
      prevEl: '#partners-slider-prev',
    },

    autoplay: partnersSliderDelay,


  });




  var footerMenuSlider = new Swiper ('#footer-menu-slider', {

    navigation: {
      nextEl: '#footer-menu-slider-next',
      prevEl: '#footer-menu-slider-prev',
    },

    spaceBetween: 2,
    slidesPerView: 4,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',

    breakpoints: {

      1023: {
        slidesPerView: 'auto',
        slidesPerColumn: 1,
      }
    }

  });




  $('.ee-sidebar-block .expand-toggle').click(function () {

    $(this).parent().next().slideToggle();

    $(this).parent().parent().toggleClass('-collapsed');

  });


  $('.js-add-to-favorite').click(function () {

    var that = this;

    $(this).toggleClass('-active');

    $.ajax({
      url: $(this).data('api-url'),
      dataType: 'json',
      data: {element_id : $(this).data('element-id')},
      success: function (data) {

        $(that).toggleClass('-active', data == "1");

      },
      error: function () {

        $(that).removeClass('-active');
      }
    });


  });


  var headerOffset = $('.header-wrapper')[0].offsetLeft;
  var headerWidth = $('.header-wrapper').outerWidth();


  setTimeout(function () {

    $('.main-menu .-has-submenu ul').each(function () {

      if ($(this).outerWidth() + $(this).parent()[0].offsetLeft > headerWidth) {

        $(this).css('left', -($(this).outerWidth() + $(this).parent()[0].offsetLeft - headerWidth));

      }


    });
  }, 1000);


  $('.search-block input').focus(function () {

    $('.search-block button').show();
    $(this).addClass('-focused');


  }).blur(function () {

    var that = this;

    setTimeout(function () {

      $('.search-block button').hide();
      $(that).removeClass('-focused');

    }, 500);


  });


  $('.ee-link-widget .widget-btn').click(function () {

    copyToClipboard($(this).prev().text());

  });


  $('.ee-expandable-text .expand-toggle span').click(function () {

    $(this).parent().prev().slideToggle();

    if ($(this).hasClass('-expanded')) {

      $(this).text('Развернуть').removeClass('-expanded');

    } else {

      $(this).text('Свернуть').addClass('-expanded');
    }

  });

  $('.ee-expandable-text-2 .title-toggle').click(function () {

    $(this).next().slideToggle();

    $(this).toggleClass('-expanded');

  });


  $('.js-rating-select').each(function () {

    $(this).change(function () {

      $.post($(this).data('api-url'), {

        rating : $(this).val(),
        id : $(this).data('publication-id'),

      }, function () {


      });

    }).barrating({
      theme: 'fa-stars-gold',
      initialRating: $(this).data('current-rating'),
      allowEmpty: true,
      readonly: !!$(this).data('voted'),
      emptyValue: 0
    });


  });



});



function copyToClipboard(str) {

    var el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    var selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }


}