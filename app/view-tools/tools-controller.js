angular.module('g5App.toolIndex', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tools', {
      templateUrl: 'view-tools/tools.html',
      controller: 'ToolControl as toolCtrl'
    })
  }])
  .controller('ToolControl', ['$http', function($http) {
    var self = this;

    $http.get('./view-tools/tool-list.json').success(function(data) { self.items = data; });

    self.toolQuery = function ToolQuery(usage) {
      return { 'usage' : usage };
    };

    self.selectOptions = {
      platformOpt: {"default":"-- 全部 --"},
      platform: [
        {"platform":"-- 全部 --"},
        {"platform":"FIRMSYS"},
        {"platform":"MELTAC"},
        {"platform":"SPEEDYHOLD"}
      ]
    };

    self.hardCodeFilter = {
      "SPEEDYHOLD":{"platform": "SPEEDYHOLD"},
      "MELTAC": {"platform":"MELTAC"},
      "FIRMSYS": {"platform":"FIRMSYS"},
    };
}])
