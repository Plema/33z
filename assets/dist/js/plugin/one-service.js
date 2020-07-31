$(document).ready(function(){

$('.caries-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-img'),
    nextArrow:  $('.slick-next-img'),
    dots: false,
    autoplay: false,
  });
  
  $('.op').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('open-info');
    $(this).parent().find('.all-info').stop().slideToggle('');
  });

})