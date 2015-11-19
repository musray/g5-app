angular.module('g5App.introApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'view-intro/intro.html',
      controller: 'IntroCtrl as introCtrl'
    })
  }])
  .controller('IntroCtrl', function() {
    var self = this;
    self.message = "深度整合安全级DCS工程设计资源，改变知识与经验的共享和使用方式";
    // self.message = "We care nuclear safety";
  })
