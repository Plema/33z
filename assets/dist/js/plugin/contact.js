$(document).ready(function(){
  var map;

  // Create the locations array
var locations = [
    [59.9869975, 30.2140294, 1],
    [59.9873533, 30.2189555, 2],
    [59.9873534, 30.2189598, 3],
  ];
  
  var markers = [];
  
  window.initMap = function() {
  
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(59.9869975, 30.2140294),
      draggable: true,
      animation: google.maps.Animation.DROP,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: '../img/punkt.png',
        id: locations[i][2],
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        
        return function() {
          for (var j = 0; j < markers.length; j++) {
              markers[j].setIcon('../img/punkt.png');
                var idMarker = this.id;
          }
          var someAdress = document.getElementsByClassName('some-adress');
                  for (var x = 0; x < someAdress.length; x++) {
                    var attribute = someAdress[x].getAttribute('data-id');
                    if(idMarker == attribute){
                      someAdress[x].style.display = 'block';
                      $('.slider-for').slick('refresh');
                      $('.slider-nav').slick('refresh');
                    }
                    else {
                      someAdress[x].style.display = 'none';
                      $('.slider-for').slick('refresh');
                      $('.slider-nav').slick('refresh');
                    }
                  }
  
                  marker.setIcon('../img/punkt2.png');
        }
      })(marker, i));
      
      markers.push(marker);
    }
  }


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    asNavFor: '.slider-nav',
    arrows: true,
    prevArrow: "<li class='slick-prev-img'><img src='../img/back.png'></li>",
    nextArrow:  "<li class='slick-next-img'><img src='../img/go.png'></li>",
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive:[
     {
      breakpoint: 600,
      settings: {
       slidesToShow: 3,
      }
    },
     {
      breakpoint: 425,
      settings: {
       slidesToShow: 2,
      }
    },
     ],
  });
  $('#location').ddslick();

  
});