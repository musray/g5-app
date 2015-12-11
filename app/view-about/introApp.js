angular.module('g5App.introApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'view-intro/intro.html',
      controller: 'IntroCtrl as introCtrl'
    })
  }])
  .controller('IntroCtrl', function() {
    var self = this;
    self.message = "更舒服的工作，更迅速的学习";
    // self.message = "We care nuclear safety";
  })
