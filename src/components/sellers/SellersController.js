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

	//helper function for updateSeller()
	$scope.setUpdateSeller = function(seller){
		console.log("bruh");
		$scope.UpdateSellerId = seller.id;
		$scope.UpdateSellerName = seller.name;
		$scope.UpdateSellerCat = seller.category;
		$scope.UpdateSellerImg = seller.imagePath;
		console.log($scope.UpdateSellerId);
	};

	$scope.updateSellers = function(name, cat, img){
		var newName = $scope.UpdateSellerName;
		var newCat = $scope.UpdateSellerCat;
		var newImg = $scope.UpdateSellerImg;

		console.log($scope.UpdateSellerName);
		if(name != ""){
			newName = name;
		}
		if($scope.UpdateSellerCat != cat){
			newCat = cat;
		}
		if($scope.UpdateSellerImg != img){
			newImg = img;
		}

		var seller_obj = {
			name: newName,
			category: newCat,
			imagePath: newImg,
		};
		AppResource.updateSeller($scope.UpdateSellerId, seller_obj);
	};

	
});