$(document).ready(function(){
      $('.op').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open-info');
        // $(this).parent().find('p').css('height','auto');
      });
       
      $('#location').ddslick();

    })