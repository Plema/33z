// var map;

//   // Create the locations array
// var locations = [
//     [59.9869975, 30.2140294, 1],
//     [59.9873533, 30.2189555, 2],
//   ];
  
//   var markers = [];
  
//   function initMap() {
  
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 13,
//       center: new google.maps.LatLng(59.9869975, 30.2140294),
//       draggable: true,
//       animation: google.maps.Animation.DROP,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });
  
//     var marker, i;
  
//     for (i = 0; i < locations.length; i++) {
//       marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations[i][0], locations[i][1]),
//         map: map,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         icon: '../img/punkt.png',
//         id: locations[i][2],
//       });
      
//       google.maps.event.addListener(marker, 'click', (function(marker, i) {
        
//         return function() {
//           for (var j = 0; j < markers.length; j++) {
//               markers[j].setIcon('../img/punkt.png');
//                 var idMarker = this.id;
//           }
//           var someAdress = document.getElementsByClassName('some-adress');
//                   for (var x = 0; x < someAdress.length; x++) {
//                     var attribute = someAdress[x].getAttribute('data-id');
//                     if(idMarker == attribute){
//                       someAdress[x].style.display = 'block';
//                     }
//                     else {
//                       someAdress[x].style.display = 'none';
//                     }
//                   }
  
//                   marker.setIcon('../img/punkt2.png');
//         }
//       })(marker, i));
      
//       markers.push(marker);
//     }
//   }


$(document).ready(function(){
    $('.phone_mask').mask('+7 (900) 000 00 00');


    $('.open_search_block').on('click', function(e){
        $('.search_block').toggleClass('active');
    });
});