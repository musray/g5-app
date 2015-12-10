angular.module('g5App.acronym', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/acronym', {
      templateUrl: 'view-acronym/acronym.html',
      controller: 'AcronymCtrl as acrCtrl'
    })
  }])
  .controller('AcronymCtrl', ['$http', function($http) {
    var self = this;

    $http.get('./view-acronym/acronym.json').success(function(data) { self.items = data; });

    self.codeIndex = function CodeIndex(code) {
      return { 'code' : code };
    };

}])
