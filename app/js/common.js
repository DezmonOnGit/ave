// Google Map begin

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

// Google Map end

$(document).ready(function(){
	// Slider owl-carousel begin

    $(".owl-carousel").owlCarousel({
    	items: 1,
    	loop: true,
    	dots: false,
    	autoplay: true,
    	autoplayTimeout: 7000,
    	autoplaySpeed: 3000,
    	dragEndSpeed: 2000,
    });

	// Slider owl-carousel end

	//Burger-menu event - click begin

	$('.menu-burger').on('click', function() {
		$(this).toggleClass('menu-burger_active');
		$('body').toggleClass('hide-scroll');
	});

	//Burger-menu event - click begin

	//Menu-item event - click begin

	$('.menu__item').on('click', function() {
		$(this).children('.sub-menu').toggleClass('sub-menu_active');
	});

	// $('.menu__item:eq(0)').on('click', function() {
	// 	$(this).children('.sub-menu').toggleClass('sub-menu_active');
	// });
	// $('.menu__item:eq(1)').on('click', function() {
	// 	$(this).children('.sub-menu').toggleClass('sub-menu_active');
	// });
	// $('.menu__item:eq(4)').on('click', function() {
	// 	$(this).children('.sub-menu').toggleClass('sub-menu_active');
	// });

	//Menu-item event - click end
	
});
