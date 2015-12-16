angular.module('g5App.DCSComponent', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dcs_component', {
      templateUrl: 'view-DCSComponent/dcscomp.html',
      controller: 'DCSCompCtrl as compCtrl'
    })
  }])
  .controller('DCSCompCtrl', ['$http', function($http) {
    var self = this;
    $http.get('./view-DCSComponent/dcs-comp-list.json').success(function(data) { self.items = data; });
  }])
