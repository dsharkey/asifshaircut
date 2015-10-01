angular.module('Controllers', []);
angular.module('Services', []);
// The application
var application = angular.module('AsifsHaircutApp',
  [
    'Controllers',
    'Services',
    'ngRoute',
    'ngAnimate'
  ]
).filter('trustText', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }])
  .filter("trustUrl", ['$sce', function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
// Routes
application.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/landing_main.html',
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo: '/'});

  //$locationProvider.html5Mode(true);

}]);

