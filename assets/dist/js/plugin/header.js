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

      $('#location1').ddslick({
        height: 150
      });
      $('#doctors1').ddslick({
        height: 150
      });
      $('#location').ddslick({
        height: 150
      });

      $('#my-element').datepicker({
        autoClose: true,
        classes: 'datepicker__calendar',
        position: 'bottom right',
        offset: 22,
      })
      $('#my-element').data('datepicker')
});