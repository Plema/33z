$(document).ready(function(){

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
      $('.all-causes').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-cau'),
        nextArrow:  $('.next-cau'),
        dots: false,
        autoplay: false,
        responsive:[
          {
           breakpoint: 1024,
           settings: {
            slidesToShow: 2,
           }
          },
          {
           breakpoint: 475,
           settings: {
            slidesToShow: 1,
           }
          },
         ],
      });
      $('.some-equip').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-eq'),
        nextArrow:  $('.next-eq'),
        dots: false,
        autoplay: false,
        responsive:[
          {
           breakpoint: 1400,
           settings: {
            slidesToShow: 3,
           }
          },
          {
           breakpoint: 900,
           settings: {
            slidesToShow: 2,
           }
          },
          {
           breakpoint: 500,
           settings: {
            slidesToShow: 1,
           }
          },
         ],
      });
      $('.op').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open-info');
        // $(this).parent().find('p').css('height','auto');
      });
      // $('#location').ddslick();

      $('.soc .tel').on('click', function(e){
        $('.popUpOrder').css('display','block');
        $('.popUp-mainArea').css('display','block');
        $('body').css('overflow-y','hidden');
      });
    
    })