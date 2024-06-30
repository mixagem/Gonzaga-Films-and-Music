(function($) {

  
  // navbar style change on scroll

  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

 $(document).scroll(function () {
    var $nav = $(".navbar-brand");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  $(document).scroll(function () {
    var $nav = $(".navlogo");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  // wow.js

  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });


  "use strict"; // Start of use strict


  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Activate scrollspy to add active class to navbar items on scroll

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });


})(jQuery); // End of use strict