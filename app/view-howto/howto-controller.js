angular.module('g5App.howTo', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/howto', {
      templateUrl: 'view-howto/howto.html',
      controller: 'HowToController as howtoCtrl'
    })
  }])

  .controller('HowToController', ['$http', function($http) {
    var self = this;

  }])
