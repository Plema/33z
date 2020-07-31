$(document).ready(function(){

    $('.open-adress').on('click', function(e){
        e.preventDefault();
        $('.all-adress').stop().slideToggle('');
        $(this).stop().toggleClass('active-adress');
      });
});