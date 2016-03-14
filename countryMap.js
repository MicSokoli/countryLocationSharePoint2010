<style>
#map-canvas {
    height: 400px;
    margin: 0px;
    padding: 0px
  }
</style>
<script src="/SiteAssets/countryCoordinates.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt8IVUEICQKZyI57cSAz5aoiv91cJ8j0Y"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
	var defaultCountry = "Kosovo";
	var defaultX = countriesWithCoordinates[defaultCountry]["xCoord"];
	var defaultY = countriesWithCoordinates[defaultCountry]["yCoord"];
	var zoomLevel = 5;
	var map;

	$(document).ready(function () {
		var country = getParameterByName("country");
		var xCoord;
		var yCoord;
		if (countriesWithCoordinates[country] != undefined) {
			xCoord = countriesWithCoordinates[country]["xCoord"];
			yCoord = countriesWithCoordinates[country]["yCoord"];
		} 
		else {
			xCoord = defaultX;
			yCoord = defaultY;
			country = defaultCountry;
		}
		initialize(xCoord, yCoord, country);		
	});

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function initialize(xCoord, yCoord, country) {		
		var coordinates = new google.maps.LatLng(xCoord, yCoord);
		var mapOptions = {
		    zoom: zoomLevel,
		   	center: coordinates
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker({
		    position: coordinates,
		    map: map,
		    title: country
		});
		console.log(country);
	}
</script>
<div id="map-canvas"></div>