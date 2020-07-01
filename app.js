(function () {
	'use strict';

angular.module('NameCalculator',[])

.controller('NameCalculatorController', function ($scope) {
	$scope.name = "";
	$scope.totalvalue = 0;
	
	$scope.displaynumeric = function () {
		var totalnamevalue =calnumforstring($scope.name);
		$scope.totalvalue = totalnamevalue;
	};

	function calnumforstring(string){
		var totalstrvalue = 0;
		for (var i =0; i < string.length; i++) {
			totalstrvalue += string.charCodeAt(i);
		}
		return totalstrvalue;
	}
});




})();