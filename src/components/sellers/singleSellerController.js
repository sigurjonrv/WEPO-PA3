"use strict";

angular.module("project3App").controller("singleSellerController",
function singleSellerController($scope, AppResource, $location, $routeParams) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
		$scope.path = $location.path;
		console.log($routeParams.sellerId);
		var currID = $routeParams.sellerId;

		
		

		

		var getSellers = function(){
			var SellerDetailsPromise = AppResource.getSellerDetails(currID);
			SellerDetailsPromise.success(function(seller){
				$scope.currSeller = seller;
			});
		};

		var getSellersProduct = function(){
			console.log("asdadss");
			var SellerProductsPromise = AppResource.getSellerProducts(currID);

			SellerProductsPromise.success(function(products){
				console.log(products.length);
				for(var i = 3; i < products.length; i++){
					if(products[i].imagePath === ""){
						products[i].imagePath = "https://az853139.vo.msecnd.net/static/images/not-found.png";
						console.log("i");
					}
				}
				$scope.currSellerProducts = products;
				console.log($scope.currSellerProducts);
			});
		};
		getSellers();
		getSellersProduct();

		$scope.addProduct = function(Pname, price, quantity, Pimage){
			console.log("kominn inní addProduct");

			var newProduct = {
				name: Pname,
				price: price,
				quantitySold: 0,
				quantityInStock: quantity,
				imagePath: Pimage
			};
			console.log(newProduct);
			console.log(currID);
			AppResource.addSellerProduct(currID, newProduct);
			getSellersProduct();
			$("#addP").modal('hide');
		};
		$scope.editProduct = function(Pname, price, quantity, Pimage){
			console.log("kominn inní addProduct");

			var newProduct = {
				name: Pname,
				price: price,
				quantitySold: 0,
				quantityInStock: quantity,
				imagePath: Pimage
			};

			AppResource.updateProduct(currID, newProduct);
			getSellersProduct();
			$("#editP").modal('hide');
		};
		//console.log(currSeller.success());



	
});//style="max-height: 350px; max-width: 350px;