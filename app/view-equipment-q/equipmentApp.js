angular.module('g5App.equipmentApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hardware-query', {
      templateUrl: 'view-equipment-q/equipment-query.html',
      controller: 'EquipCtrl as equipCtrl'
    })
  }])

  .controller('EquipCtrl', ['$http', function($http) {
    var self = this;

    $http.get('./view-equipment-q/device-list.json').success(function(data) { self.items = data; });

    self.filterOptions = {
      "siChecked": {"esf":"SI"},
      "csChecked": {"esf":"CS"},
      "trainAChecked": {"train":"Train A"},
      "trainBChecked": {"train":"Train B"},
      "ciaChecked": {"esf":"CIA"},
      "cibChecked": {"esf":"CIB"}
    };

  }])
