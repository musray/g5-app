angular.module('g5App.cotsApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cots', {
      templateUrl: 'view-cots/cots.html',
      controller: 'cotsControl as cotsCtrl'
    })
  }])
  .controller('cotsControl', ['$http', function($http) {
    var self = this;

    $http.get('./view-cots/cots-list.json').success(function(data) { self.items = data; });

    self.itemQuery = function ItemQuery(usage) {
      return { 'usage' : usage };
    };

    self.selectOptions = {
      categoryOpt: {"default":"-- 全部 --"},
      category: [
        {"category":"-- 全部 --"},
        {"category":"电缆"},
        {"category":"电源"},
        {"category":"端子"},
        {"category":"断路器"},
        {"category":"二极管"},
        {"category":"光纤"},
        {"category":"继电器"},
        {"category":"浪涌保护"},
        {"category":"滤波器"},
        {"category":"其他"}
      ]
    };

    self.hardCodeFilter = {
        '电缆': {"category":"电缆"},
        '电源': {"category":"电源"},
        '端子': {"category":"端子"},
        '断路器': {"category":"断路器"},
        '二极管': {"category":"二极管"},
        '光纤': {"category":"光纤"},
        '继电器': {"category":"继电器"},
        '浪涌保护': {"category":"浪涌保护"},
        '滤波器': {"category":"滤波器"},
        '其它': {"category":"其他"}
    };
}])
