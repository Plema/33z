$(document).ready(function(){
        
        $(".button-top > button").bind("click", function(){
            var thisClass = $(this).attr("class");
            
            if(thisClass === 'yellow-button'){
              $(this).parent().find('.black-button').removeClass().addClass('yellow-button');
              $(this).removeClass().addClass('black-button');
              console.log(thisClass);
            }
        
            if(thisClass === 'black-button'){
              $(this).parent().find('.yellow-button').removeClass().addClass('black-button');
              $(this).removeClass().addClass('yellow-button');
              console.log(thisClass);
            }
            console.log(thisClass)
          });
});