$(document).ready(function(){

  $('.services-slider-nav').slick({
    swipe: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    // focusOnSelect: true,
    asNavFor: '.services-slider-for',
    nextArrow: '<button class="slick-arrow next"><img src="../img/nextArrBlack.png" alt=""></button>',
    prevArrow: '<button class="slick-arrow prev"><img src="../img/prevArrBlack.png" alt=""></button>',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ],
  });

  $('.services-slider-for').slick({
    fade: true,   
    swipe: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.services-slider-nav',
  });

  $('.slick-active.slick-center').prev().addClass('active4');
  $('.active4').prev().addClass('active3');
  $('.active3').prev().addClass('active2');
  $('.active2').prev().addClass('active1');

  $('.slick-active.slick-center').next().addClass('active6');
  $('.active6').next().addClass('active7');
  $('.active7').next().addClass('active8');
  $('.active8').next().addClass('active9');

  $('.services-slider-nav .next').on('click', function(){

    $('.slick-slide').removeClass('active active1 active2 active3 active4 active5 active6 active7 active8 active9');

    $('.slick-active.slick-center').prev().addClass('active4');
    $('.active4').prev().addClass('active3');
    $('.active3').prev().addClass('active2');
    $('.active2').prev().addClass('active1');

    $('.slick-active.slick-center').next().addClass('active6');
    $('.active6').next().addClass('active7');
    $('.active7').next().addClass('active8');
    $('.active8').next().addClass('active9');

  });

  $('.services-slider-nav .prev').on('click', function(){

    $('.slick-slide').removeClass('active active1 active2 active3 active4 active5 active6 active7 active8 active9');

    $('.slick-active.slick-center').prev().addClass('active4');
    $('.active4').prev().addClass('active3');
    $('.active3').prev().addClass('active2');
    $('.active2').prev().addClass('active1');

    $('.slick-active.slick-center').next().addClass('active6');
    $('.active6').next().addClass('active7');
    $('.active7').next().addClass('active8');
    $('.active8').next().addClass('active9');

  });

  $('.services-slider-nav .prev').addClass('active');

  $('.services-slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){

    $('.services-slider-nav .prev').removeClass('active');
    $('.services-slider-nav .next').removeClass('active');

    if(currentSlide == 0){
      $('.services-slider-nav .prev').addClass('active');
    }

    if(currentSlide == 8){
      $('.services-slider-nav .next').addClass('active');
    }

  });

    $('.right-part-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-adv'),
        nextArrow:  $('.next-adv'),
        dots: false,
        autoplay: false,
      });
      
      $('.op').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open-info');
        // $(this).parent().find('p').css('height','auto');
      });

      $('#location').ddslick();
      
    })