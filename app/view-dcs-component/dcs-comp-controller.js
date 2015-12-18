angular.module('g5App.DCSComponent', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dcs_component', {
      templateUrl: 'view-dcs-component/dcscomp.html',
      controller: 'DCSCompCtrl as compCtrl'
    })
  }])
  .controller('DCSCompCtrl', ['$http', function($http) {
    var self = this;
    $http.get('./view-dcs-component/dcs-comp-list.json').success(function(data) { self.items = data; });
  }])
