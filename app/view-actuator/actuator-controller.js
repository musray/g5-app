angular.module('g5App.actuatorApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/esf-actuator', {
      templateUrl: 'view-actuator/actuator.html',
      controller: 'ActuatorCtrl as actCtrl'
    })
  }])

  .controller('ActuatorCtrl', ['$http', function($http) {
    var self = this;

    $http.get('./view-actuator/actuator.json').success(function(data) { self.items = data; });

    self.filterOptions = {
      "siChecked": {"esf":"SI"},
      "csChecked": {"esf":"CS"},
      "trainAChecked": {"train":"Train A"},
      "trainBChecked": {"train":"Train B"},
      "ciaChecked": {"esf":"CIA"},
      "cibChecked": {"esf":"CIB"}
    };

    self.sortOrderKeyword = [];


    // to generate the sort order keyword variable
    self.reOrder = function ReOrder(keyList) {
      self.sortOrderKeyword = [];
      for (var i = 0; i < keyList.length; i ++) {
        if (keyList[i]) {
          self.sortOrderKeyword.push('+' + keyList[i]);
          console.log(self.sortOrderKeyword);
        }
      };
    }

    self.columnShow = {
      "function_description": false,
      "ld_index": false,
      "sd_index": false
    };

    self.debug = function DeBug(data) {
      console.log(data);
    }

  }])
