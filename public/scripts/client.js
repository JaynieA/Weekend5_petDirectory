console.log('js');

var app = angular.module('petsApp', []);

app.controller('PetsController', ['$scope', '$http', function($scope, $http) {
  console.log('NG');
}]); // end PetsController
