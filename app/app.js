angular.module('g5App', [
    'ngRoute',
    'g5App.introApp',
    'g5App.docApp',
    'g5App.equipmentApp'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }])
