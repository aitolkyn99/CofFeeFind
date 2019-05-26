function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

$(document).ready(function() {
	var menus_list = menus.split('\n');
	var shop_info = {};
	for (info in menus_list) {
		data = menus_list[info].split(' ');
		if (isEmpty(shop_info[data[0]])) {
			shop_info[data[0]] = {'rating': data[1], 'menus': [[data[2], data[3]]]};
		} else {
			shop_info[data[0]].menus.push([data[2], data[3]])
		}
	}
	var reviews_list = reviews.split('\n')
	for (info in reviews_list) {
		data = reviews_list[info].split(' ');
		if (data[3] != 'None') {
			if (isEmpty(shop_info[data[0]]['reviews'])) {
					shop_info[data[0]]['reviews'] = [[data[3], data[4], data[5], data[6]]]
			} else {
					shop_info[data[0]]['reviews'].push([data[3], data[4], data[5], data[6]])
			}
		}
	}

	
})

