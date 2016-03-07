"use strict";

angular.module("project3App").controller("singleSellerController",
function singleSellerController($scope, AppResource, $location, $routeParams) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
		$scope.path = $location.path;
		console.log($routeParams.sellerId);
		var currID = $routeParams.sellerId;
		var SellerDetailsPromise = AppResource.getSellerDetails(currID);
		var SellerProductsPromise = AppResource.getSellerProducts(currID);

		SellerDetailsPromise.success(function(seller){
			$scope.currSeller = seller;
		});

		SellerProductsPromise.success(function(products){
			for(var i = 0; i < products.length;i++){
				console.log(i);
				if(products[i].imagePath === ""){
					products[i].imagePath = "https://az853139.vo.msecnd.net/static/images/not-found.png";
				}
				//console.log(products[i]);
			}
			
			$scope.currSellerProducts = products;
			console.log(products);
		});
		//console.log(currSeller.success());



	
});//style="max-height: 350px; max-width: 350px;