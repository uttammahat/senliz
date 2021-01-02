$(window).on("load", function () {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});

$(document).ready(function (e) {

  /* page animation */
  AOS.init({
    duration: 1200,
    easing: "ease",
    anchorPlacement: "top",
    once: true,
  });

  /* navigation click actions */
  $(".nav-link[href='#']").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 250);
  });

  // Body js
  var dteNow = new Date();
  var intYear = dteNow.getFullYear();

  $('#copyright').each(function () {
    var text = $(this).text();
    $(this).text(text.replace('CurrentCopyrightYear', intYear));
  });

  /* scroll function */
  function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var navbarNav = $("#navbarNav");
    var toggleButton = $(".navbar-toggler");
    $("html,body").animate({
      scrollTop: targetOffset
    }, speed);
    if (navbarNav.hasClass("show")) {
      navbarNav.css("height", "1px").removeClass("show").addClass("collapse");
      toggleButton.addClass("collapsed").attr("aria-expanded", "false");
      navbarNav.removeClass("show");
    }
  }

  var offset = 100;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
      $(".navigation-bar").addClass("light-nav");
    } else {
      $(".progress-wrap").removeClass("active-progress");
      $(".navigation-bar").removeClass("light-nav");
    }
  });
});