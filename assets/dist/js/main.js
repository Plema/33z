$(document).ready(function(){
 
  $('.burger-menu').on('click', function(){
    var screenWidth = screen.width;
    if(screenWidth > 1024 ){
    var dopMenu = $('.dop-link-desc').css('display');
    if(dopMenu === 'none'){
        $('.dop-link-desc').css('display','flex');
    }
    else {
        $('.dop-link-desc').css('display','none');
    }
  }
  });


  $('.drop-service').on('click', function(e){
    e.preventDefault();
    $('.dop-link-drop').stop().slideToggle('');
    $('.container-nav').stop().toggleClass('active-service');
  });
  $('.burger-menu').on('click', function(e){
    e.preventDefault();
    $('.drop-menu').stop().slideToggle('');
    var screenWidth = screen.width;
    if(screenWidth > 1023 ){
      $('.drop-menu').css('display','none');
    }
  });
  $('.close-dop-menu').on('click', function(e){
    e.preventDefault();
    $('.drop-menu').stop().slideToggle('');
  });

      $('.all-some-slideCauses').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-adv'),
        nextArrow:  $('.next-adv'),
        dots: false,
        autoplay: false,
        responsive:[
          {
           breakpoint: 1280,
           settings: {
            slidesToShow: 3,
           }
         },
          {
           breakpoint: 1024,
           settings: {
            slidesToShow: 2,
           }
         },
         {
          breakpoint: 510,
          settings: {
           slidesToShow: 1,
          }
        },
         ],
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

      $('.all-review').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-review'),
        nextArrow:  $('.next-review'),
        dots: false,
        autoplay: false,
      });

      $(".all-review").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });

      $('.all-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick-prev-img'),
        nextArrow:  $('.slick-next-img'),
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
          breakpoint: 768,
          settings: {
           slidesToShow: 1,
          }
        },
         ],
      });

      $('.popUp-mainArea').on('click', function(e){
        $('.popUp').css('display','none');
        $('.popUp-mainArea').css('display','none');
        $('body').css('overflow-y','auto');
      });

      $('.close-popUp').on('click', function(e){
        $('.popUp').css('display','none');
        $('.popUp-mainArea').css('display','none');
        $('body').css('overflow-y','auto');
      });

      $('.openPolitic').on('click', function(e){
        $('.popUpConf').css('display','block');
        $('.popUp-mainArea').css('display','block');
        $('body').css('overflow-y','hidden');
      });

      $('.openForm').on('click', function(e){
        $('.popUpOrder').css('display','block');
        $('.popUp-mainArea').css('display','block');
        $('body').css('overflow-y','hidden');
      });
      $('.open-popUpAsk').on('click', function(e){
        $('.popUpAsk').css('display','block');
        $('.popUp-mainArea').css('display','block');
        $('body').css('overflow-y','hidden');
      });
      $('.location').on('click', function(e){
        $('.popUpBranches').css('display','block');
        $('.popUp-mainArea').css('display','block');
        $('body').css('overflow-y','hidden');
      });
      $('.description').on('click', function(e){
        var infoPup = $('.popUpInfo').css('display');
        if(infoPup === 'none'){
            $('.popUpInfo').css('display','block');
        }
        else {
            $('.popUpInfo').css('display','none');
        }
      });
      $('.close').on('click', function(e){
        $('.popUpInfo').css('display','none');
      });

      // $('.openForm').on('click', function(e){
      //   var s = '';
      //   var checkSecName = document.getElementById('checkSecName').value;
      //   var checkName = document.getElementById('checkName').value;
      //   var checkTel = document.getElementById('checkTel').value;
      //   var checkEmail = document.getElementById('checkEmail').value;
      //       if(checkSecName === s || checkName === s || checkTel === s || checkEmail){
      //         alert('Заполните пожалуйста все поля')
      //       }
      //       else {
      //         $('.popUpThank').css('display','block');
      //       }
      // });

      $('#location1').ddslick();
      $('#doctors1').ddslick();




    $(function() {
        $(".js-datepicker").datepicker({
            showOtherMonths:true,
            dateFormat : "dd.mm.yy" ,
            minDate: 0,
            monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        });
    });




      $('.banner-slider-nav').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner-slider-for',
        centerMode: true,
        focusOnSelect: true,
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

      $('.banner-slider-for').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.banner-slider-nav',
      });


      var sliderB = $('.banner-slider-for .slick-current.slick-active').find('.for-item').data('slider');

      $('.banner-slider-nav').addClass('for' + sliderB);

      $('.banner-slider-nav .slick-center').next().addClass('next');
      $('.banner-slider-nav .slick-center').prev().addClass('prev');

      $('.banner-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.banner-slider-nav .slick-slide').removeClass('next');
        $('.banner-slider-nav .slick-slide').removeClass('prev');
        $('.banner-slider-nav .slick-center').next().addClass('next');
        $('.banner-slider-nav .slick-center').prev().addClass('prev');
      });

      $('.banner-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.banner-bg').removeClass('slider1 slider2 slider3 slider4 slider5 slider6 slider7 slider8 slider9');
        $('.banner-slider-nav').removeClass('forslider1 forslider2 forslider3 forslider4 forslider5 forslider6 forslider7 forslider8 forslider9');
        $('.podium-item').removeClass('active');
        

        var sliderB = $('.banner-slider-for .slick-current.slick-active').find('.for-item').data('slider');
        $('.banner-slider-nav').addClass('for' + sliderB);


        if(currentSlide == 0){
          $('.banner-bg').addClass('slider1');
          $('.podium-item1').addClass('active');
        }
        if(currentSlide == 1){
          $('.banner-bg').addClass('slider2');
          $('.podium-item2').addClass('active');
        }
        if(currentSlide == 2){
          $('.banner-bg').addClass('slider3');
          $('.podium-item3').addClass('active');
        }
        if(currentSlide == 3){
          $('.banner-bg').addClass('slider4');
          $('.podium-item4').addClass('active');
        }
        if(currentSlide == 4){
          $('.banner-bg').addClass('slider5');
          $('.podium-item5').addClass('active');
        }
        if(currentSlide == 5){
          $('.banner-bg').addClass('slider6');
          $('.podium-item6').addClass('active');
        }
        if(currentSlide == 6){
          $('.banner-bg').addClass('slider7');
          $('.podium-item7').addClass('active');
        }
        if(currentSlide == 7){
          $('.banner-bg').addClass('slider8');
          $('.podium-item8').addClass('active');
        }
        if(currentSlide == 8){
          $('.banner-bg').addClass('slider9');
          $('.podium-item9').addClass('active');
        }
      });

      if($(window).width() >= 1024){

        $('.banner-slider-for').slick('unslick');
        $('.banner-slider-nav').slick('unslick');

        $('.banner-slider-nav .item').next().removeClass('next');
        $('.banner-slider-nav .item').prev().removeClass('prev');


        $('.banner-slider-nav .item').on('click', function(){
          $('.banner-slider-nav').removeClass('forslider1 forslider2 forslider3 forslider4 forslider5 forslider6 forslider7 forslider8 forslider9');
          $('.banner-bg').removeClass('active');
          $('.banner-slider-nav .item').removeClass('active');
          $('.banner-slider-for .item').removeClass('active');
          $('.podium-item').removeClass('active');
          var forslider = $(this).data('forslider');
          var podium = $(this).data('podium');
          var sub = $(this).data('sub');
          var slid = $(this).find('.for-item').data('slider');
          $(this).addClass('active');
          $('.' + slid).addClass('active');
          $('.' + podium).addClass('active');
          $('.' + sub).addClass('active');
          $('.banner-slider-nav').addClass(forslider);
        });

      }

      var $example2	= $('.example');

      $example2.arctext({radius: 90})

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

      

});