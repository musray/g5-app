angular.module('g5App.mainView', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'view-main/main.html',
      controller: 'MainController as mainCtrl'
    })
  }])
  .controller('MainController', ['$http', function($http) {
    var self = this;
  }])
