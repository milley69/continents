// form
function slowScroll(id) {
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 3000);
}

// for input phone
$(document).ready(function() {
  $(".phone").mask("+7 (999) 99-99-999");
});


// owlCarousel 2
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    margin: 80,
    smartSpeed: 1000,
    navText: ['<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>']
  });
});


// 2gis
var map;
DG.then(function() {
  map = DG.map('map', {
    center: [64.536529, 40.524039],
    zoom: 15,
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    geoclicker: false,
    zoomControl: false,
    fullscreenControl: false
  });
  DG.marker([64.536529, 40.524039]).addTo(map);
});
