$(function() {

  $('.menu-icon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });

  // $(window).on('scroll', function() {
  //   if($(window).scrollTop()) {
  //     $('nav').addClass('black');
  //   }
  //   else {
  //     $('nav').removeClass('black');
  //     $('menu-icon').css('background-color', 'none');
  //   }
  // })



  // Waypoints + CSSAnimate

  var $topBar = $('.top-bar');

  var $theTenTop = $('.featured-top');
  var $theTenBottom = $('.featured-gallery');

  var $newArrivalsTop = $('.newarrivals-top');
  var $newArrivalsBottom = $('.newarrivals-bottom');

  var $locationTop = $('.location-top');
  var $locationBottom = $('.location-bottom');

  var $hoursTop = $('.hours-top');
  var $hoursBottom = $('.hours-bottom');

  var $pricesTop = $('.prices');
  var $pricesBottom = $('.prices-menu');

  var $moreDetails = $('.moreDetails');


  $topBar.waypoint(function() {
    $topBar.addClass('animated fadeInDown js-animate');
  }, {
    offset: '50%'
  });

  $theTenTop.waypoint(function() {
    $theTenTop.addClass('animated fadeInUp js-animate');
  }, {
    offset: '50%'
  });

  $theTenBottom.waypoint(function() {
    $theTenBottom.addClass('animated fadeInLeft js-animate');
  }, {
    offset: '65%'
  });
  ////////////////////

  $newArrivalsTop.waypoint(function() {
    $newArrivalsTop.addClass('animated fadeInUp js-animate');
  }, {
    offset: '50%'
  });

  $newArrivalsBottom.waypoint(function() {
    $newArrivalsBottom.addClass('animated fadeInLeft js-animate');
  }, {
    offset: '65%'
  });

  ////////////////////////////////////////////////

  $locationTop.waypoint(function() {
    $locationTop.addClass('animated fadeInUp js-animate');
  }, {
    offset: '50%'
  });

  $locationBottom.waypoint(function() {
    $locationBottom.addClass('animated fadeInLeft js-animate');
  }, {
    offset: '65%'
  });
  ////////////////////////////
  $hoursTop.waypoint(function() {
    $hoursTop.addClass('animated fadeInUp js-animate');
  }, {
    offset: '50%'
  });

  $hoursBottom.waypoint(function() {
    $hoursBottom.addClass('animated fadeInLeft js-animate');
  }, {
    offset: '65%'
  });
  ///////////////////////////////////////
  $pricesTop.waypoint(function() {
    $pricesTop.addClass('animated fadeInUp js-animate');
  }, {
    offset: '50%'
  });

  $pricesBottom.waypoint(function() {
    $pricesBottom.addClass('animated fadeInLeft js-animate');
  }, {
    offset: '65%'
  });

  $('.figure').hover(function() {
    $moreDetails.addClass('animated shake');
  }, function() {
    $moreDetails.removeClass('animated shake');
  });

  /////////////////////////////////////////

  // Smooth Scroll


  $('nav a').smoothScroll({
    offset: 100,
    speed: 1000
  });

////////////////////////

  // Sticky nav

  var navOffset = $('.featured-top').offset().top;
  var scrollPos = $(window).scrollTop();

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);
  });

  if (scrollPos >= navOffset) {
    $('header nav').addClass('disappear');
  }
  else {
    $('header nav').removeClass('disappear');
  }



  ////////////////////////////////////////////////

  // Scroll To top

  var offset = 250;
  var duration = 500;

  $(window).scroll(function() {
    if($(this).scrollTop() > offset){
      $('.to-top').fadeIn(duration);
    } else {
      $('.to-top').fadeOut(duration);
    }
  });

  $('.to-top').click(function() {
    $('body').animate({scrollTop: 0}, duration);
  });

});
