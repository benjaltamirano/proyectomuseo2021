/* -- esconder menu -- */
//  let ubicacionPrincipal = window.pageYOffset;
//  window.onscroll = function(){
//      let desplazamiento_actual = window.pageYOffset;
//      if(ubicacionPrincipal >= desplazamiento_actual){
//         document.getElementById('navbar').style.top = '0';
//      }
//      else{
//         document.getElementById('navbar').style.top = '-100px';
//      }
//      ubicacionPrincipal = desplazamiento_actual;
//  }
$(document).ready(function () {
  $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


$(document).ready(function () {

  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });

});



