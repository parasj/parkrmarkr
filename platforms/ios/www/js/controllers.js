angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MainCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ParknowCtrl', function($scope, $stateParams) {
  $scope.parkingspots = [
    { price: '4.00', dist: '0.1', loc: 'In the Hyatt' , updatetime: '20m ago', notes: 'Addional fees may apply'},
    { price: '3.20', dist: '0.6', loc: 'On Old Ironsides Road' , updatetime: '29m ago'},
    { price: '2.00', dist: '0.7', loc: 'On Bunker Hill Lane' , updatetime: '12m ago'},
    { price: '2.00', dist: '1.1', loc: 'On Democracy Way' , updatetime: '12m ago'},
  ];

  $scope.goNext = function (hash) { 
    alert(0);
    $location.path(hash);
   }

   $scope.pay = function (test) {
      var url = "http://google.com"
      var ref = window.open(url, '_blank', 'location=no');
   }
})

.controller('PayCtrl', function($scope, $stateParams) {

});
