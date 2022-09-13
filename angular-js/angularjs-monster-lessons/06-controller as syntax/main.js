var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
  // $scope.myLesson = 'Lesson';
  this.myLesson = "MainLesson"

  this.addLesson = function() {
    console.log('addLesson');
  };

  $scope.mainCtrl = this;
});

app.controller('firstCtrl', function() {
  // $scope.myLesson = 'Lesson';
  this.myLesson = "FirstLesson"
});

app.controller('secondCtrl', function() {
  // $scope.myLesson = 'Lesson';
  this.myLesson = "SecondLesson"
});

