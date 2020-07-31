$(document).ready(function(){

  $('.open-theme').on('click', function(e){
    e.preventDefault();
    $('.all-theme').stop().slideToggle('');
    $(this).stop().toggleClass('active-theme');
  });

  //$('#faq_tabs .black-button').on('click', function(e){
  //  e.preventDefault();
  //  $('.all-theme').stop().slideToggle('');
  //});

  $('.op').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('open-info');
    $(this).parent().find('.all-info').stop().slideToggle('');
  });

})