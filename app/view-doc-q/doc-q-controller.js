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

    $http.get('./view-doc-q/doc-list.json').success(function(data) { self.items = data; });

    self.selectOptions = {
      platformOpt: {"platform":"-- 全部 --"},
      platform: [
        {"platform":"-- 全部 --"},
        {"platform":"FirmSys"},
        {"platform":"MELTAC"},
        {"platform":"SpeedyHold"}
      ],
      refer_to: [
        {"refer_to":"-- 全部 --"},
        {"refer_to":"BDSD"},
        {"refer_to":"IO List"},
        {"refer_to":"WD(IF)"},
        {"refer_to":"Software"},
        {"refer_to":"Arrangement"},
        {"refer_to":"Assembly"},
        {"refer_to":"Cable"},
        {"refer_to":"Card Setting"},
        {"refer_to":"Equipment List"},
        {"refer_to":"Equipment Spec"},
        {"refer_to":"Hardwired Logic"},
        {"refer_to":"Installation Layout"},
        {"refer_to":"Internal Cable"},
        {"refer_to":"Terminal Block"}
      ],
      doc_category: [
        {"doc_category":"-- 全部 --"},
        {"doc_category":"管理规定"},
        {"doc_category":"流程"},
        {"doc_category":"设计规范"},
        {"doc_category":"作业指导及模板"},
        {"doc_category":"方案"}
      ]
    };

    self.hardCodeFilter = {
      // filter: platform
      // {'key': 'value'}, set this object in the ngFilter, will sort the
      // repeated table by column which is named as 'key'.
      "SpeedyHold":{"platform": "SpeedyHold"},
      "MELTAC": {"platform":"MELTAC"},
      "FirmSys": {"platform":"FirmSys"},
      "通用": {"platform":"通用"},
      // filter: refered document
      "BDSD": {"refer_to":"BDSD"},
      "IO List": {"refer_to":"IO List"},
      "WD(IF)": {"refer_to":"WD(IF)"},
      "Software": {"refer_to":"Software"},
      "Arrangement": {"refer_to":"Arrangement"},
      "Assembly": {"refer_to":"Assembly"},
      "Cable": {"refer_to":"Cable"},
      "Card Setting": {"refer_to":"Card Setting"},
      "Equipment List": {"refer_to":"Equipment List"},
      "Equipment Spec": {"refer_to":"Equipment Spec"},
      "Hardwired Logic": {"refer_to":"Hardwired Logic"},
      "Installation Layout": {"refer_to":"Installation Layout"},
      "Internal Cable": {"refer_to":"Internal Cable"},
      "Terminal Block": {"refer_to":"Terminal Block"},
      // filter: document category
      "设计规范":{"doc_category":"设计规范"},
      "操作指导":{"doc_category":"操作指导"},
      "模板表格":{"doc_category":"模板表格"}
    };
}])
