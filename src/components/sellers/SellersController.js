"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	var $path = $location.path;
	var sellerListPromise = AppResource.getSellers();

	sellerListPromise.success(function(sellersList){
		console.log(sellersList);
		$scope.sellers = sellersList;
	});

	$scope.addSeller = function(name, cat, img){
		var seller_obj = {
			name: name,
			category: cat,
			imagePath: img,
		};
		AppResource.addSeller(seller_obj);
		console.log("virkadi!");
	};
});