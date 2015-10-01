angular.module('Controllers')
  .controller('MainCtrl', function ($scope) {
    $scope.recentActivities = [
      {
        "name": "Tom Lowe",
        "page": {
          "url": "http://blog.newscred.com/pin-this-inside-pinterests-content-marketing-strategy/",
          "title": "Cool Article",
          "featured_image": "http://blognewscredcom.c.presscdn.com/wp-content/uploads/2015/10/wpid-thumbnail-0e465d7acb164de735f0a90899e8405c.png"
        },
        "action": "Signed Up",
        "time": "2015-10-01T17:30:48.163Z",
        "lead score": 445
      },
      {
        "name": "Rohun Gholkar",
        "page": {
          "url": "http://blog.newscred.com/pin-this-inside-pinterests-content-marketing-strategy/",
          "title": "Cool Article",
          "featured_image": "http://blognewscredcom.c.presscdn.com/wp-content/uploads/2015/10/wpid-thumbnail-0e465d7acb164de735f0a90899e8405c.png"
        },
        "action": "Signed Up",
        "time": "2015-10-01T17:30:48.163Z",
        "lead score": 445
      },
      {
        "name": "Asif Rahman",
        "page": {
          "url": "http://blog.newscred.com/pin-this-inside-pinterests-content-marketing-strategy/",
          "title": "Cool Article",
          "featured_image": "http://blognewscredcom.c.presscdn.com/wp-content/uploads/2015/10/wpid-thumbnail-0e465d7acb164de735f0a90899e8405c.png"
        },
        "action": "Signed Up",
        "time": "2015-10-01T17:30:48.163Z",
        "lead score": 445
      }
    ];
  });