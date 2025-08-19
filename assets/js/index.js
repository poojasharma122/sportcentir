// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

$(function () {
  $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 9000,
      arrows: false,
      swipe: false,
      slidesToShow: 3,
      cssEase: 'linear',
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnHover:true,

  });
});