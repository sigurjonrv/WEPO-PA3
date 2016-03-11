"use strict";

describe("SellersController", function() {

	// Load the controllers module
	beforeEach(module("project3App"));

	var scope, resource, SellersController;

	var mockLocation = {
		path: function(p) {
		}
	};

	// Initialize the controller and a mock scope
	beforeEach(inject(function($rootScope, AppResource, $controller) {
		scope = $rootScope.$new();
		resource = AppResource;
		spyOn(mockLocation, "path");
		SellersController = $controller('SellersController', {
			$scope: scope,
			AppResource: resource,
			$location: mockLocation
		});
	}));

	it('addseller should be defined', function() {
		expect(scope.addSeller).toBeDefined;
	});
});