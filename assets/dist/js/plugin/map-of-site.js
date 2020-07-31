$(document).ready(function(){
  
    $('.title').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('open');
      $(this).parent().find('.all-links').stop().slideToggle('');
    });
  
  })