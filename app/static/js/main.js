function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

$(document).ready(function() {
	function updateMap(text) {
		// source = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCX9qkjGSWG58emAj0ex_qqv8-wBCTt8eA&q=" + text + "&language=en&maptype=roadmap"
		source = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCX9qkjGSWG58emAj0ex_qqv8-wBCTt8eA&origin=`+text+`&destination=Twosome+Place&mode=walking`
		
		var map = document.getElementById("the__map");
		map.src = source;
	}
	function locationSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        var accuracy = position.coords.accuracy;
        var altitudeAccuracy = position.coords.altitudeAccuracy;
        var heading = position.coords.height;
        var speed = position.coords.speed;
        var timestamp = position.timestamp;
        updateMap(latitude.toString() + ',' + longitude.toString())
        // work with this information however you'd like!
    }

    function locationError(error) {
        var code = error.code;
        var message = error.message;

        // read the code and message and decide how you want to handle this!
    }

    navigator.geolocation.getCurrentPosition(locationSuccess, locationError)

	var menus_list = menus.split('\n');
	var shop_info = {};
	for (info in menus_list) {
		data = menus_list[info].split(' ');
		if (isEmpty(shop_info[data[0]])) {
			shop_info[data[0]] = {'rating': data[1], 'menus': [[data[3], data[4]]]};
		} else {
			shop_info[data[0]].menus.push([data[3], data[4]])
		}
	}
	var reviews_list = reviews.split('\n')
	for (info in reviews_list) {
		data = reviews_list[info].split(' ');
		if (data[3] != 'None') {
			if (isEmpty(shop_info[data[0]]['reviews'])) {
					shop_info[data[0]]['reviews'] = [[data[4], data[5], data[6], data[7]]]
			} else {
					shop_info[data[0]]['reviews'].push([data[4], data[5], data[6], data[7]])
			}
		}
	}
	updateMap("Kazakhstan+Karaganda");

	
})

