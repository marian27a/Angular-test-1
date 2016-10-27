(function () {
'use strict'
angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
	$scope.name = "";
	$scope.totalValue = 0;
	$scope.displayNumetic = function () {
		var totalNameValue = calculateNumerForString($scope.name);
		$scope.totalValue = totalNameValue;
	};
	function calculateNumerForString (str) {
		var totalStringValue = 0;
		for(var i = 0; i<str.length; i++){
			totalStringValue+=str.charCodeAt(i);
		};
		
		return totalStringValue;
	}
	
});


	
})();
