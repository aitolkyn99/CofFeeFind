$(document).ready(function() {
	var coffeeShopList = coffeeShops.split('\n')
	var menuList = menus.split('\n')
	var customerList = customers.split('\n');
	for (customer in customerList) {
		if (customer.includes('00'))
			var x = customer;
		if (customer.includes('01'))
			var y = customer;
	}
})

