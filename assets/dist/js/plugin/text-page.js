$(document).ready(function(){
      
      $('.op').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open-op');
        $(this).parent().find('p').toggleClass('open-p');
      });

    
    })