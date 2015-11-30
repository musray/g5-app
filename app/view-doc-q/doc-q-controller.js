angular.module('g5App.docApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/doc-q', {
      templateUrl: 'view-doc-q/doc-q.html',
      controller: 'DocQuery as docq'
    })
  }])
  .controller('DocQuery', ['$http', function($http) {
    var self = this;
    self.message = "Page for document query. Under construction";

    $http.get('./view-doc-q/doc_list.json').success(function(data) { self.items = data; });

    self.selectOptions = {
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
      "FIRMSYS": {"platform":"FIRMSYS"}
    };
}])
