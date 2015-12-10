angular.module('g5App', [
    'ngRoute',
    'g5App.introApp',
    'g5App.docApp',
    'g5App.equipmentApp',
    'g5App.acronym'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }])

  // used to set class attribute as 
  // active when main manual is active
  .controller('HeadController', ['$location', function($location){
    var self = this;
    self.isActive = function (viewLocation){
      return viewLocation === $location.path();
    };
  }])
