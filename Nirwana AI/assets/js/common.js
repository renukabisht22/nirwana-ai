$(document).ready(function () {

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const closeMenu = document.getElementById('closeMenu');

  hamburger.addEventListener('click', function() {
      menu.classList.add('active'); // Smoothly show the menu
  });

  closeMenu.addEventListener('click', function() {
      menu.classList.remove('active'); // Smoothly hide the menu
  });
  
  $(window).on("load", function () {
    $(".banner-slider-one").slick();
    $(".banner-slider-two").slick();
  });

  $(".banner-slider-one").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    infinite: true,
    vertical: true,
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Custom function to reverse the scroll direction
  function reverseScroll() {
    setInterval(function () {
      $(".banner-slider-one").slick("slickPrev");
    }, 0); // Match the interval with the speed setting
  }

  reverseScroll();

  $(".banner-slider-two").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    infinite: true,
    vertical: true,
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  reverseScroll();
});

$(".blog_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 3500,
  speed: 1000,
  infinite: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
  slidesToScroll: 1,
      },
    },
  ],
});