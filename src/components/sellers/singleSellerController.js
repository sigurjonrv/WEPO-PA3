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
			console.log("getSellersProduct");
			var SellerProductsPromise = AppResource.getSellerProducts(currID);

			SellerProductsPromise.success(function(products){
				//console.log(products.length);
				for(var i = 3; i < products.length; i++){
					if(products[i].imagePath === ""){
						products[i].imagePath = "https://az853139.vo.msecnd.net/static/images/not-found.png";
						//console.log("i");
					}
				}
				console.log("rett? " + $scope.UpdateProductId);
				$scope.products =  _.find(products, function(o){ return parseInt(o.id) === parseInt($scope.UpdateProductId);});
				$scope.currSellerProducts = products;
				//console.log($scope.currSellerProducts);
			});
		};
		getSellers();
		getSellersProduct();

		$scope.setUpdateProductId = function(id){
			console.log("the id is: " + id);
			$scope.UpdateProductId = id;
		};

		$scope.all = function(){
			getSellersProduct();
		};

		$scope.top10 = function(){
			console.log("top10");
			var sortedItems = $scope.currSellerProducts;
			var temp = [];
			sortedItems.sort(function(a,b){
				return b.quantitySold - a.quantitySold;
			});
			for (var x = 0; x < 10; x++){
				console.log(sortedItems[x]);
				temp.push(sortedItems[x]);
			}
			$scope.currSellerProducts = temp;
		};

		$scope.addProduct = function(Pname, price, quantity, Pimage){
			console.log("kominn inní addProduct");

			var newProduct = {
				name: Pname,
				price: price,
				quantitySold: 0,
				quantityInStock: quantity,
				imagePath: Pimage
			};
			AppResource.addSellerProduct(currID, $scope.products);
			getSellersProduct();
			$("#addP").modal('hide');
		};

		$scope.editProduct = function(Pname, price, quantity, Pimage){
			//console.log("kominn inní addProduct");
			console.log($scope.currSellerProducts);
			var newProduct = {
				name: Pname,
				price: price,
				quantitySold: 0,
				quantityInStock: quantity,
				imagePath: Pimage
			};
			AppResource.updateProduct($scope.UpdateProductId, newProduct);
			getSellersProduct();
			$("#editP").modal('hide');
		};

});