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


});