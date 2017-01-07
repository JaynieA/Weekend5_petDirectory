var logs = false;
var app = angular.module("petsApp", ["ngRoute"]);

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
      clearForm();
    }); // end $http
  }; // end postPet

}]); // end AddPetController

app.controller("ViewPetsController", ["$scope", '$http', function($scope, $http) {

  var init = function() {
    getPets();
  }; // end init

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

  var getPets = function() {
    if (logs) console.log('in getPets');
    //get all pets from the server
    $http({
      method: 'GET',
      url: '/pets'
    }).then(function(response) {
      if (logs) console.log(response.data);
      $scope.allPets = response.data;
    }); // end $http
  }; // end getPets

  //initialize the app
  init();

}]); // end ViewPetsController
