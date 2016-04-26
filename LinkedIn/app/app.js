'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) { //<========= myContrl for all content
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
}).controller('topCardCtrl', function($scope) { //<================== topCardCtrl for Top Card
  $scope.nameEditorEnabled = false;
  $scope.experienceEditorEnabled = false;
  $scope.addressEditorEnabled = false;
  $scope.currentEditorEnabled = false;
  $scope.previousEditorEnabled = false;
  $scope.contactEditorEnabled = false;

  // background image
  $scope.backgroundColorName = "white";
  $scope.backgroundColorExperice = "white";
  $scope.backgroundColorAddress = "white";
  $scope.backgroundColorCurrent = "white";
  $scope.backgroundColorPrevious = "white";
  $scope.backgroundColorContact = "white";

  $scope.editableSummary = "abc";

  //============================================================================
  // enter Top Card: show edit icon
  $scope.enterTopCard = function()
  {
    $scope.basicInfoEditorEnabled = true;
  }

  // Leave Top Card: hide edit icon
  $scope.leaveTopCard = function()
  {
    $scope.basicInfoEditorEnabled = false;
  }

  //=============================================================================
  // Enter
  $scope.enterTopCardContent = function(type)
  {
    switch (type)
    {
      case "name": $scope.backgroundColorName = "deepskyblue"; break;
      case "experience": $scope.backgroundColorExperience = "deepskyblue"; break;
      case "address": $scope.backgroundColorAddress = "deepskyblue"; break;
      case "current": $scope.backgroundColorCurrent = "deepskyblue"; break;
      case "previous": $scope.backgroundColorPrevious = "deepskyblue"; break;
      case "contact": $scope.backgroundColorContact = "deepskyblue"; break;
    }
  }

  // Leave
  $scope.leaveTopCardContent = function(type)
  {
    switch (type)
    {
      case "name": $scope.backgroundColorName = "white"; break;
      case "experience": $scope.backgroundColorExperience = "white"; break;
      case "address": $scope.backgroundColorAddress = "white"; break;
      case "current": $scope.backgroundColorCurrent = "white"; break;
      case "previous": $scope.backgroundColorPrevious = "white"; break;
      case "contact": $scope.backgroundColorContact = "white"; break;
    }
  }
  //==========================================================================
  // Editor

  $scope.clickTopCardContent = function(type)
  {
    switch (type)
    {
      case "name":
        $scope.nameEditorEnabled = true;
        $scope.editableName = $scope.basicinfo.name;
        break;
      case "experience":
        $scope.experienceEditorEnabled = true;
        $scope.editableExperience = $scope.experience[0].position;
        break;
      case "address":
        $scope.addressEditorEnabled = true;
        $scope.editableAddress = $scope.basicinfo.address;
        break;
      case "current":
        $scope.currentEditorEnabled = true;
        $scope.editableCurrent = $scope.basicinfo.current;
        break;
      case "previous":
        $scope.previousEditorEnabled = true;
        $scope.editablePrevious = $scope.basicinfo.previous;
        break;
      case "contact":
        $scope.contactEditorEnabled = true;
        $scope.editableContact = $scope.basicinfo.contact;
        break;
    }
  }

  $scope.cancel = function(type) {
    switch (type) {
      case "name":
        $scope.nameEditorEnabled = false;
        break;
      case "experience":
        $scope.experienceEditorEnabled = false;
        break;
      case "address":
        $scope.addressEditorEnabled = false;
        break;
      case "current":
        $scope.currentEditorEnabled = false;
        break;
      case "previous":
        $scope.previousEditorEnabled = false;
        break;
      case "contact":
        $scope.contactEditorEnabled = false;
        break;
    }
  };

  $scope.save = function(type) {
    switch (type) {
      case "name":
        $scope.basicinfo.name = $scope.editableName;
        $scope.cancel(type);
        break;
      case "experience":
        $scope.experience[0].position = $scope.editableExperience;
        $scope.cancel(type);
        break;
      case "address":
        $scope.basicinfo.address = $scope.editableAddress;
        $scope.cancel(type);
        break;
      case "current":
        $scope.basicinfo.current = $scope.editableCurrent;
        $scope.cancel(type);
        break;
      case "previous":
        $scope.basicinfo.previous = $scope.editablePrevious;
        $scope.cancel(type);
        break;
      case "contact":
        $scope.basicinfo.contact = $scope.editableContact;
        $scope.cancel(type);
        break;
    }
  };
});


