console.log('js');

var app = angular.module('petsApp', []);

app.controller('PetsController', ['$scope', '$http', function($scope, $http) {
  console.log('NG');

  var init = function() {
    getPets();
  }; // end init

  var clearForm = function() {
    //reset input values to blank
    $scope.nameIn = '';
    $scope.ageIn = '';
    $scope.speciesIn = '';
    $scope.urlIn = '';
  }; // end clearForm

  var getPets = function() {
    console.log('in getPets');
    $http({
      method: 'GET',
      url: '/pets'
    }).then(function(response) {
      console.log(response.data);
      $scope.allPets = response.data;
    }); // end $http
  }; // end getPets

  $scope.postPet = function() {
    console.log('in postPet');
    //assemble object to send
    var objectToSend = {
      name: $scope.nameIn,
      animal: $scope.speciesIn,
      age: Number($scope.ageIn),
      image_url: $scope.urlIn
    }; // end objectToSend
    console.log(objectToSend);
    $http({
      method: 'POST',
      url: '/pets',
      data: objectToSend
    }).then(function(response) {
      console.log(response);
      clearForm();
      getPets();
    }); // end $http
  }; // end postPet

  //initialize the app
  init();
}]); // end PetsController
