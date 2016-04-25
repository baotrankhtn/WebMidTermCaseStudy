'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
  // Load summary
  $http.get('./json/summary.json').success(function(data) {
    $scope.summary = data;
  });

  // Load projects
  $http.get('./json/project.json').success(function(data) {
    $scope.project = data;
  });

  // Load education
  $http.get('./json/education.json').success(function(data) {
    $scope.education = data;
  });

  // Load skills
  $http.get('./json/skill.json').success(function(data) {
    $scope.skill = data;
  });

  // Load experience
  $http.get('./json/experience.json').success(function(data) {
    $scope.experience = data;
  });

  // Load basic info
  $http.get('./json/basicinfo.json').success(function(data) {
    $scope.basicinfo = data;
  });
});
