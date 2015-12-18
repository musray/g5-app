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
    
    self.selectOptions = {
      platformOpt: {"default":"-- 全部 --"},
      platform: [
        {"platform":"-- 全部 --"},
        {"platform":"FIRMSYS"},
        {"platform":"MELTAC"},
        {"platform":"SPEEDYHOLD"}
      ],
      name: [
        {"name":"-- 全部 --"},
        {"name":"Repeater"},
        {"name":"AI"},
        {"name":"AO"},
        {"name":"DI"},
        {"name":"DO"},
        {"name":"PIF"},
        {"name":"RTD"},
        {"name":"TC"},
        {"name":"分配卡"},
        {"name":"隔离卡"},
        {"name":"端子排"},
        {"name":"机笼"}
      ]
    }

    self.hardCodeFilter = {
      // filter: platform
      "SPEEDYHOLD":{"platform": "SPEEDYHOLD"},
      "MELTAC": {"platform":"MELTAC"},
      "FIRMSYS": {"platform":"FIRMSYS"},
      "Repeater": {"name":"repeater"},
      "AI": {"name":"AI"},
      "AO": {"name":"AO"},
      "DI": {"name":"DI"},
      "DO": {"name":"DO"},
      "PIF": {"name":"PIF"},
      "RTD": {"name":"RTD"},
      "TC": {"name":"TC"},
      "分配卡": {"name":"分配卡"},
      "隔离卡": {"name":"隔离卡"},
      "机笼": {"name":"机笼"},
      "端子排": {"name":"端子排"}
    }
  }])
