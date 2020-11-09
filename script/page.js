$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    items: 3,
    dots: true,
    autoplayHoverPause: true,
    slideSpeed: 100,
    lazyload: true,
    stagepadding: true,
    smartspeed: 450,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      485: {
        items: 2,
        dots: false,
      },
      728: {
        items: 3,
        loop: true,
      },
      960: {
        items: 4,
        loop: true,
      },
      1200: {
        items: 4,
        dots: false,
      },
    },
  });
});
