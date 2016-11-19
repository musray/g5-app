angular.module('g5App.docApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/doc-q', {
      templateUrl: 'view-doc-q/doc-q.html',
      controller: 'DocQuery as docq'
    })
  }])
  .controller('DocQuery', ['$http', function($http) {
    var self = this;
    // self.message = "Page for document query. Under construction";

    $http.get('./view-doc-q/doc-list.json').success(function(data) { self.items = data; });

    self.selectOptions = {
      platform: [
        {"platform":"-- 全部 --"},
        {"platform":"FirmSys"},
        {"platform":"MELTAC"},
        {"platform":"SpeedyHold"},
        {"platform":"通用"}
      ],
      doc_category: [
        {"doc_category":"-- 全部 --"},
        {"doc_category":"方案"},
        {"doc_category":"流程"},
        {"doc_category":"设计规范"},
        {"doc_category":"作业指导及模板"},
        {"doc_category":"管理规定"}
      ],
      refer_to: [
        {"refer_to":"-- 全部 --"},
        {"refer_to":"功能图(FD)"},
        {"refer_to":"IO List"},
        {"refer_to":"接线图(WD)"},
        {"refer_to":"装配"},
        {"refer_to":"组态"},
        {"refer_to":"机柜硬件"},
        {"refer_to":"应用软件"},
        {"refer_to":"Cable"},
        {"refer_to":"网关"}
      ]
    };

    // filter: platform
    // {'key': 'value'}, set this object in the ngFilter, will sort the
    // repeated table by column which is named as 'key'.
    self.hardCodeFilter = {
      "SpeedyHold":{"platform": "SpeedyHold"},
      "MELTAC": {"platform":"MELTAC"},
      "FirmSys": {"platform":"FirmSys"},
      "通用": {"platform":"通用"},
      "功能图(FD)": {"refer_to":"功能图(FD)"},
      "方案": {"doc_category": "方案"},
      "流程": {"doc_category": "流程"},
      "设计规范": {"doc_category": "设计规范"},
      "作业指导及模板": {"doc_category": "作业指导及模板"},
      "管理规定": {"doc_category": "管理规定"},
      "IO List": {"refer_to":"IO List"},
      "接线图(WD)": {"refer_to":"接线图(WD)"},
      "装配": {"refer_to":"装配"},
      "组态": {"refer_to":"组态"},
      "机柜硬件": {"refer_to":"机柜硬件"},
      "应用软件": {"refer_to":"应用软件"},
      "Cable": {"refer_to":"Cable"},
      "网关": {"refer_to":"网关"}
    };
}])
