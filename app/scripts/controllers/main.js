'use strict';

angular.module('nectarineApp')
  .controller('MainCtrl', function ($scope, angularFire){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
