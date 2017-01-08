var logs = false;
var app = angular.module("petsApp", ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

//Inject route providers
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/routes/home.html',
      controller: 'HomeController'
    })
    .when('/addPet', {
      templateUrl: '/routes/addPet.html',
      controller: "AddPetController"
    })
    .when('/viewPets', {
      templateUrl: '/routes/viewPets.html',
      controller: "ViewPetsController"
    })
    .otherwise({
      redirectTo: "home"
    }); // end $routeProvider
}]); // end config

//Controllers
app.controller("HomeController", ["$scope", '$http', function($scope, $http) {
  if (logs) console.log('home');
}]); // end HomeController

app.controller("AddPetController", ["$scope", '$http', function($scope, $http) {
  $scope.postSuccess = false;

  var clearForm = function() {
    //reset input values to blank
    $scope.nameIn = '';
    $scope.ageIn = '';
    $scope.speciesIn = '';
    $scope.urlIn = '';
  }; // end clearForm

  $scope.postPet = function() {
    if (logs) console.log('in postPet');
    //assemble object to send
    var objectToSend = {
      name: $scope.nameIn,
      animal: $scope.speciesIn,
      age: Number($scope.ageIn),
      image_url: $scope.urlIn
    }; // end objectToSend
    //send the object to the server
    $http({
      method: 'POST',
      url: '/pets',
      data: objectToSend
    }).then(function(response) {
      $scope.postSuccess = true;
      clearForm();
    }); // end $http
  }; // end postPet

}]); // end AddPetController

app.controller("ViewPetsController", ["$scope", '$http', function($scope, $http) {

  var init = function() {
    $scope.getPets();
  }; // end init

  var clearForm = function() {
    $scope.searchIn = '';
  }; // end clearForm

  $scope.deletePet = function(petId) {
    if (logs) console.log('in deletePet. ID -->', petId);
    //construct urlString
    var urlString = '/pets/' + petId;
    //send request to server to delete pet
    $http({
      method: 'DELETE',
      url: urlString,
    }).then(function(response) {
      if (logs) console.log('delete $http success. Response -->',response);
      getPets();
    }); // end $http
  }; // end deletePet

  $scope.getPets = function() {
    if (logs) console.log('in getPets');
    //assemble url string
    var urlString;
    if ($scope.searchIn) {
      urlString = '/pets/' + $scope.searchIn;
    } else {
      urlString = '/pets';
    } // end else
    if (logs) console.log(urlString);
    //get pets from the server
    $http({
      method: 'GET',
      url: urlString
    }).then(function(response) {
      $scope.allPets = response.data;
      clearForm();
    }); // end $http
  }; // end getPets

  //initialize the app
  init();

}]); // end ViewPetsController
