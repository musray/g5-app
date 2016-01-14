angular.module('g5App.performance', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/performance', {
      templateUrl: 'view-performance/performance.html',
      controller: 'PerfCtrl as perfCtrl'
    })
  }])
  .controller('PerfCtrl', ['$http', function($http) {
    var self = this;

    // $http.get('./view-doc-q/doc-list.json').success(function(data) { self.items = data; });

}])
