'use strict';

angular.module('nectarineApp')
  .controller('MainCtrl', function ($scope, angularFire){
    var url = 'https://nectarine.firebaseio.com/items';
	var promise = angularFire(url, $scope, 'items', []);

    promise.then(function() {
	  // Add a new item by simply modifying the model directly.
	  $scope.items.push({});
	  // Or, attach a function to $scope that will let a directive in markup manipulate the model.
	  $scope.removeItem = function() {
	    $scope.items.splice($scope.toRemove, 1);
	    $scope.toRemove = null;
	  };
	});
  });
