angular.module('Services')
.factory('BasicAPIServiceV1', ['$http', function ($http) {
    return {
      recentActivities: function () {
        return $http.get('https://fast-brushlands-4500.herokuapp.com/recent-activities');
      }
    }
  }]);