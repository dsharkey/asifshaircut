angular.module('Controllers')
  .controller('MainCtrl', function ($scope, BasicAPIServiceV1) {
    //$scope.recentActivities = [
    //  {
    //    "user": {
    //      "name": "Toby Johnson",
    //      "title": "North America Direct Marketing Manager",
    //      "company": "Schneider Electric",
    //      "industry": "Technology",
    //      "user_photo": "http://resize.ly/cache/licdn.com/3b3de358f8c9d310ad81a0f4b9fd04c5/50x50.png"
    //    },
    //    "page": {
    //      "url": "http://blog.newscred.com/lessons-in-blogging-building-an-audience-from-jeff-bullas/",
    //      "image": "http://resize.ly/img/kittens/kitty-1024x768.jpg",
    //      "title": "Lessons In Blogging + Building An Audience From Jeff Bullas | Newscred Blog"
    //    },
    //    "timestamp": "5 hours ago"
    //  },
    //  {
    //    "user": {
    //      "name": "Toby Johnson",
    //      "title": "North America Direct Marketing Manager",
    //      "company": "Schneider Electric",
    //      "industry": "Technology",
    //      "user_photo": "http://resize.ly/cache/licdn.com/3b3de358f8c9d310ad81a0f4b9fd04c5/50x50.png"
    //    },
    //    "page": {
    //      "url": "http://blog.newscred.com/lessons-in-blogging-building-an-audience-from-jeff-bullas/",
    //      "image": "http://resize.ly/img/kittens/kitty-1024x768.jpg",
    //      "title": "Lessons In Blogging + Building An Audience From Jeff Bullas | Newscred Blog"
    //    },
    //    "timestamp": "5 hours ago"
    //  },
    //  {
    //    "user": {
    //      "name": "Toby Johnson",
    //      "title": "North America Direct Marketing Manager",
    //      "company": "Schneider Electric",
    //      "industry": "Technology",
    //      "user_photo": "http://resize.ly/cache/licdn.com/3b3de358f8c9d310ad81a0f4b9fd04c5/50x50.png"
    //    },
    //    "page": {
    //      "url": "http://blog.newscred.com/lessons-in-blogging-building-an-audience-from-jeff-bullas/",
    //      "image": "http://resize.ly/img/kittens/kitty-1024x768.jpg",
    //      "title": "Lessons In Blogging + Building An Audience From Jeff Bullas | Newscred Blog"
    //    },
    //    "timestamp": "5 hours ago"
    //  },
    //  {
    //    "user": {
    //      "name": "Toby Johnson",
    //      "title": "North America Direct Marketing Manager",
    //      "company": "Schneider Electric",
    //      "industry": "Technology",
    //      "user_photo": "http://resize.ly/cache/licdn.com/3b3de358f8c9d310ad81a0f4b9fd04c5/50x50.png"
    //    },
    //    "page": {
    //      "url": "http://blog.newscred.com/lessons-in-blogging-building-an-audience-from-jeff-bullas/",
    //      "image": "http://resize.ly/img/kittens/kitty-1024x768.jpg",
    //      "title": "Lessons In Blogging + Building An Audience From Jeff Bullas | Newscred Blog"
    //    },
    //    "timestamp": "5 hours ago"
    //  }
    //];
    $scope.data = {};
    $scope.data.loading = true;
    BasicAPIServiceV1.recentActivities()
      .then(function (result) {
        $scope.recentActivities = result.data.result;
        console.log($scope.recentActivities);
      })
      .finally(function () {
        $scope.data.loading = false;
      });
    ;
  });