angular.module('g5App.devApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dev', {
      templateUrl: 'view-dev/dev.html',
      controller: 'DevController as devCtrl'
    })
  }])
  .controller('DevController', function() {
    var self = this;
  })
