$(document).ready(function(){
        
  $('.read-all').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('open-info');
  });

  $('.hid-all').on('click', function(e){
    e.preventDefault();
    $(this).parent().removeClass('open-info');
  });

  
  $('.title').on('click', function(e){
    e.preventDefault();
    var screenWidth = screen.width;
    if(screenWidth < 1024 ){
      $(this).toggleClass('open-arrow');
      $(this).parent().find('.all-table').stop().slideToggle('');
    }
  });

})