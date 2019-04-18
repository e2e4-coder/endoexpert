$(document).ready(function () {


  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
  });

  $('h2.-with-toggle').click(function () {

    $(this).toggleClass('-collapsed');

    $(this).next().slideToggle();
    $(this).parent().next('.expandable-block').slideToggle();

  });

  $('.day-evening-switcher img').click(function () {

    $('.day-evening-switcher img').removeClass('-active');

    $(this).addClass('-active');

    $('.schema-tab-day, .schema-tab-evening').hide().filter('.' + $(this).data('tab')).fadeIn();

  });


  $('.timing_nav a').click(function (e) {

    $('.timing_nav a').removeClass('-active');

    $(this).addClass('-active');

    if ($(this).data('scheme') === 'timing_diagnostic') {

      $('.timing_diagnostic_only').show();
      $('.timing_surgery_only').hide();

    } else {

      $('.timing_diagnostic_only').hide();
      $('.timing_surgery_only').show();
    }

    $('.mv-section-samples .tab_elem').hide().filter('.' + $(this).data('scheme')).fadeIn();


    e.preventDefault();
    return false;

  });

  $('.faq-list').on('click', '.list-question a', function (e) {

    $(this).parent().toggleClass('-collapsed').next().slideToggle();

    e.preventDefault();
    return false;

  });


  var videoSlider = new Swiper ('.mv-video-slider .swiper-container', {

    slidesPerView: 2,
    spaceBetween : 25,
    navigation: {
      nextEl: '.mv-video-slider .swiper-button-next',
      prevEl: '.mv-video-slider .swiper-button-prev',
    },

  });

  var newsSlider = new Swiper ('.mv-news-slider .swiper-container', {

    slidesPerView: 3,
    spaceBetween : 30,
    navigation: {
      nextEl: '.mv-news-slider .swiper-button-next',
      prevEl: '.mv-news-slider .swiper-button-prev',
    },

  });


  setTimeout(function() {
    $("#map").length ? DG.then(function() {
      return DG.plugin("https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js")
    }).then(function() {
      e = DG.map("map", {
        center: [55.76, 37.64],
        zoom: 9,
        fullscreenControl: !1,
        zoomControl: !1
      }), myIcon = DG.icon({
        iconUrl: "/local/assets/img_moviprep/map_icon.png",
        iconSize: [32, 35]
      });
      var t = DG.markerClusterGroup({
        showCoverageOnHover: !1
      });
      $.ajax({
        url: "/local/assets/json/moviprep_map.json",
        success: function(n) {
          //array = JSON.parse(n);
          array = n;
          for (var r = 0; r < array.features.length; r++) {
            var i = DG.marker([array.features[r].geometry.coordinates[0], array.features[r].geometry.coordinates[1]], {
              icon: myIcon
            }).bindPopup(array.features[r].properties.balloonContent);
            t.addLayer(i)
          }
          e.addLayer(t)
        }
      }), e.locate({
        setView: !0,
        watch: !0
      }).on("locationfound", function(t) {
        DG.marker([t.latitude, t.longitude]).addTo(e).bindPopup("Р’Р°С€Рµ РјРµСЃС‚РѕРїРѕР»РѕР¶РµРЅРёРµ!")
      })
    }) : DG.then(function() {
      return DG.plugin("https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js")
    }).then(function() {
      e = DG.map("map2gis", {
        center: [65.76, 95.64],
        zoom: 3,
        fullscreenControl: !1,
        zoomControl: !1
      }), myIcon = DG.icon({
        iconUrl: "/local/assets/img_moviprep/clinic_map_icon.png",
        iconSize: [34, 41]
      });
      var t = DG.markerClusterGroup({
        showCoverageOnHover: !1
      });
      $.ajax({
        url: "/excel-pharm",
        success: function(n) {
          array = JSON.parse(n);
          for (var r = 0; r < array.features.length; r++) {
            var i = DG.marker([array.features[r].geometry.coordinates[0], array.features[r].geometry.coordinates[1]], {
              icon: myIcon
            }).bindPopup(array.features[r].properties.balloonContent);
            t.addLayer(i)
          }
          e.addLayer(t)
        }
      }), e.locate({
        setView: !0,
        watch: !0
      }).on("locationfound", function(t) {
        DG.marker([t.latitude, t.longitude]).addTo(e).bindPopup("Р’Р°С€Рµ РјРµСЃС‚РѕРїРѕР»РѕР¶РµРЅРёРµ!")
      })
    })
  }, 1000);


});