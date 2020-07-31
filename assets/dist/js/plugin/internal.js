$(document).ready(function(){

        $('.all-review').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          adaptiveHeight: true,
          prevArrow: $('.prev-review'),
          nextArrow:  $('.next-review'),
          dots: false,
          autoplay: false,
        });
  
        $(".all-review").on('afterChange', function(event, slick, currentSlide){
          $("#cp").text(currentSlide + 1);
       });
  
  });