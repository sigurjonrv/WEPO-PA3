"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/:sellerId", {
		templateUrl: "components/sellers/singleSeller.html",
		controller: "singleSellerController"
	});

	$translateProvider.useStaticFilesLoader({
		prefix : "lang_",
		suffix: ".json"
	});
	$translateProvider.use("is");

});

