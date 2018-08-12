function initMap() {
	var coordinates = {lat: 51.512471, lng: -0.139817},
	    markerImage = '../img/marker-map.png',
	    zoom = 20,

	    map = new google.maps.Map(document.getElementById('map'), {
	        center: coordinates,
	        zoom: zoom,
	        disableDefaultUI: true
	    }),

	    marker = new google.maps.Marker({
	        position: coordinates,
	        map: map,
	        icon: markerImage
	    });

	$.getJSON("../json/map-style.json", function(data) {
    	map.setOptions({styles: data});
	});
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    	items: 1,
    	loop: true,
    	dots: false,
    	autoplay: true,
    	autoplayTimeout: 7000,
    	autoplaySpeed: 3000,
    	dragEndSpeed: 2000,
    });
});
