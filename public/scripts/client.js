console.log('js');

var app = angular.module("petsApp", ["ngRoute"]);


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



app.controller("HomeController", ["$scope", '$http', function($scope, $http) {
  console.log('home');
}]); // end controller

app.controller("AddPetController", ["$scope", '$http', function($scope, $http) {
  console.log('add pet');
}]); // end controller

app.controller("ViewPetsController", ["$scope", '$http', function($scope, $http) {
  console.log('view pets');
}]); // end controller

// app.controller('PetsController', ['$scope', '$http', function($scope, $http) {
//   console.log('NG');
//
//   var init = function() {
//     getPets();
//   }; // end init
//
//   var clearForm = function() {
//     //reset input values to blank
//     $scope.nameIn = '';
//     $scope.ageIn = '';
//     $scope.speciesIn = '';
//     $scope.urlIn = '';
//   }; // end clearForm
//
//   $scope.deletePet = function(petId) {
//     console.log('in deletePet. ID -->', petId);
//     //construct urlString
//     var urlString = '/pets/' + petId;
//     //send request to server to delete pet
//     $http({
//       method: 'DELETE',
//       url: urlString,
//     }).then(function(response) {
//       console.log('delete $http success. Response -->',response);
//       getPets();
//     }); // end $http
//   }; // end deletePet
//
//   var getPets = function() {
//     console.log('in getPets');
//     //get all pets from the server
//     $http({
//       method: 'GET',
//       url: '/pets'
//     }).then(function(response) {
//       console.log(response.data);
//       $scope.allPets = response.data;
//     }); // end $http
//   }; // end getPets
//
//   $scope.postPet = function() {
//     console.log('in postPet');
//     //assemble object to send
//     var objectToSend = {
//       name: $scope.nameIn,
//       animal: $scope.speciesIn,
//       age: Number($scope.ageIn),
//       image_url: $scope.urlIn
//     }; // end objectToSend
//     //send the object to the server
//     $http({
//       method: 'POST',
//       url: '/pets',
//       data: objectToSend
//     }).then(function(response) {
//       clearForm();
//       getPets();
//     }); // end $http
//   }; // end postPet
//
//   //initialize the app
//   init();
// }]); // end PetsController
