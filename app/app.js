angular.module('g5App', [
    'ngRoute',
    'g5App.introApp',
    'g5App.docApp',
    'g5App.equipmentApp'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }])

  .controller('HeadController', ['$location', function($location){
    var self = this;
    self.isActive = function (viewLocation){
      return viewLocation === $location.path();
    };
  }])
