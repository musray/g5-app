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

    // self.referedDocs = [
    //   'BDSD', 
    //   'Arrangement', 
    //   'Assembly', 
    //   'AT Software', 
    //   'AT Test Table',
    //   'ATWS', 
    //   'Cable', 
    //   'card setting',
    //   'Equipment List',
    //   'Equipment Spec',
    //   'External Cable',
    //   'Hardwired Logic',
    //   'Installation Layout',
    //   'Internal Cable',
    //   'IO List',
    //   'n.a',
    //   'Software',
    //   'Software Diagram',
    //   'Terminal Block',
    //   'WD(IF)'
    // ];

    // self.referedDocs = {
    //   '全部': '',  
    //   'BDSD': {'refer_to':'BDSD'},
    //   'Arrangement': {'refer_to':'Arrangement'}
    // };
    self.referedDocs = {
      '全部': '',  
      'MELTAC': {'platform':'MELTAC'},
      'n.a': {'platform':'n.a'},
      'FIRMSYS': {'platform':'FIRMSYS'}
    };
    self.hardCodeFilter = {'refer_to': 'Arrangement'};

}])
