"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, $routeParams) {
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
		$("#add").modal('hide');
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

		if(name !== undefined){
			newName = name;
		}
		if(cat !== undefined){
			newCat = cat;
		}
		if(img !== undefined){
			newImg = img;
		}


		var seller_obj = {
			name: newName,
			category: newCat,
			imagePath: newImg,
		};
		
		AppResource.updateSeller($scope.UpdateSellerId, seller_obj);
		$("#update").modal('hide');
	};

	$scope.viewSeller = function(id){
		$location.path("/" + id);
	};

	
});