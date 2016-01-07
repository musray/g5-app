angular.module('g5App.acronym', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/acronym', {
      templateUrl: 'view-acronym/acronym.html',
      controller: 'AcronymCtrl as acrCtrl'
    })
  }])
  .controller('AcronymCtrl', ['$http', function($http) {
    var self = this;

    $http.get('./view-acronym/acronym.json').success(function(data) { self.items = data; });

    self.codeIndex = function CodeIndex(code) {
      return { 'code' : code };
    };

    self.selectOptions = {
      originOpt: {"default":"-- 全部 --"},
      origin: [
        {"origin":"-- 全部 --"},
        {"origin":"Overall"},
        {"origin":"CPR1000"},
        {"origin":"AP1000"},
        {"origin":"Firmsys"},
        {"origin":"FitRel"}
      ]
    };

    self.hardCodeFilter = {
        'Overall': {"origin":"Overall"},
        'Firmsys': {"origin":"Firmsys"},
        'CPR1000': {"origin":"CPR1000"},
        'AP1000' : {"origin":"AP1000"},
        'FitRel' : {"origin":"FitRel"}
    };
}])
