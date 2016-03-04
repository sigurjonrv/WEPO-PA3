"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	var sellerListPromise = AppResource.getSellers();
	
	sellerListPromise.success(function(sellersList){
		console.log(sellersList);
		$scope.sellers = sellersList;
	});


});