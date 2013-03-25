$(document).ready(function(){
      var directionsDisplay;
      var directionsService;

    function getLocation () {
      directionsDisplay = new google.maps.DirectionsRenderer();
      // var office = new google.maps.LatLng(33.941024, -84.125417);
      var mapOptions = {
          zoom     : 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center   : new google.maps.LatLng(33.941024, -84.125417),
      }
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var markerOptions = {
          position : new google.maps.LatLng(33.941024, -84.125417),
          map      : map
            };
      var marker = new google.maps.Marker(markerOptions);
          marker.setMap(map);

      var infoWindowOptions = {
          content  : 'Lawrenceville Family Dentistry'
            };
      var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
          google.maps.event.addListener(map,'tilesloaded',function(e){           
          infoWindow.open(map, marker);
          directionsService = new google.maps.DirectionsService(); 
        });              
          directionsDisplay.setMap(map);
          directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    }; // end getLocation

// ================== calcRoute Function ========================== //
    function calcRoute() {
      var start   = document.getElementById("start").value;
      var end     = document.getElementById("end").value;
      var request = {
          origin     : start,
          destination: end,
         travelMode  : google.maps.TravelMode.DRIVING
      };
         directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
        }
      });    
}; //end calcRoute 
    getLocation();
    $('#getdirections').click(
      function(){
        calcRoute();
      }
  ); // end click 
}) // end ready