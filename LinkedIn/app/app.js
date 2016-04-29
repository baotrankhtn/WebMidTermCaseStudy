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
}).controller('infoCtrl', function($scope) { //<======================= 5 cards
  // =============================================== Summary =========================================================
  $scope.summaryEditorEnabled = false;

  // Open editor
  $scope.clickEditSummary = function()
  {
    $scope.summaryEditorEnabled = true;
    $scope.editableSummary = $scope.summary.content;
  }

  // Save
  $scope.saveSummary = function()
  {
    $scope.summary.content = $scope.editableSummary;
    $scope.cancelSummary();
  }

  // Cancel
  $scope.cancelSummary= function()
  {
    $scope.summaryEditorEnabled = false;
  }

  // =================================================== Project ======================================================
  $scope.projectEditorIconEnabled = false;
  $scope.chosen = -1;
  $scope.model = [];

  // Show/Hide editor icon
  $scope.enterProject = function()
  {
    $scope.projectEditorIconEnabled = true;
  }

  $scope.leaveProject = function()
  {
    $scope.projectEditorIconEnabled = false;
  }

  // Click editor icon
  $scope.clickProjectContent = function(index)
  {
    $scope.chosen = index;
    $scope.model[index] = $scope.project[index].content;
  }

  // If chosen, open editor
  $scope.projectEditorEnabled = function(index)
  {
    if (index == $scope.chosen)
      return true;
    return false;
  }

  // Save edit
  $scope.saveProject = function(index)
  {
    $scope.project[index].content = $scope.model[index];
    $scope.cancelProject();
  }

  // Cancel edit
  $scope.cancelProject = function()
  {
    $scope.chosen = -1;
  }

  // Remove
  $scope.removeProject = function(index)
  {
    $scope.project.splice(index, 1);
    $scope.cancelProject();
  }

  // Add project
  $scope.projectAddEnabled = false;

  // Add project button
  $scope.clickAddProject = function()
  {
    $scope.projectAddEnabled = true;
    $scope.newProject = "";
  }

  // Save and cancel new project
  $scope.saveNewProject = function()
  {
    // add new project
    $scope.newProjectItem = { "content": $scope.newProject};
    $scope.project.push($scope.newProjectItem );
    $scope.cancelNewProject();
  }

  $scope.cancelNewProject = function()
  {
    $scope.projectAddEnabled = false;
  }

  //============================================== Skill =========================================================
  // Edit skill
  $scope.skillEditorIconEnabled = false;
  $scope.modelSkillRate = [];
  $scope.modelSkillName = [];
  $scope.chosenSkill = -1;

  // Show editor
  $scope.skillEditorEnabled = function(index)
  {
    if (index == $scope.chosenSkill)
        return true;
    return false;
  }

  $scope.clickSkillContent = function(index)
  {
    $scope.chosenSkill = index;
    $scope.modelSkillRate[index] = $scope.skill[index].rate;
    $scope.modelSkillName[index] = $scope.skill[index].skillname;
  }

  // Cancel edtting
  $scope.cancelSkill = function()
  {
    $scope.chosenSkill = -1;
  }

  // Save editted skill
  $scope.saveSkill = function(index)
  {
    $scope.skill[index].rate = $scope.modelSkillRate[index];
    $scope.skill[index].skillname = $scope.modelSkillName[index];
    $scope.cancelSkill();
  }
  // Remove skill
  $scope.removeSkill = function(index)
  {
    $scope.skill.splice(index, 1);
    $scope.cancelSkill();
  }

  // Show/Hide skill editor icon
  $scope.enterSkill = function()
  {
    $scope.skillEditorIconEnabled = true;
  }

  $scope.leaveSkill = function()
  {
    $scope.skillEditorIconEnabled = false;
  }


  // Add new skill
  $scope.skillAddEnabled = false;

  $scope.clickAddSkill = function()
  {
    $scope.newSkillRate = "";
    $scope.newSkillName = "";
    $scope.skillAddEnabled = true;
  }

  $scope.cancelNewSkill = function()
  {
    $scope.skillAddEnabled = false;
  }

  $scope.saveNewSkill = function()
  {
    $scope.newItem = {"rate": $scope.newSkillRate, "skillname": $scope.newSkillName};
    $scope.skill.push($scope.newItem);
    $scope.cancelNewSkill();
  }

  // ============================================ Education ======================================================

  // ----Edit education
  $scope.educationEditorIconEnabled = false;
  $scope.chosenEducation = -1;
  $scope.modelSchool = [];
  $scope.modelDegree = [];
  $scope.modeldateAttended = [];
  $scope.modeldateGraduate = [];

  // Click edit icon
  $scope.clickEducationContent = function(index)
  {
    // Show info
    $scope.modelSchool[index] = $scope.education[index].university;
    $scope.modelDegree[index] = $scope.education[index].degree;
    $scope.modeldateAttended[index] = $scope.education[index].start;
    $scope.modeldateGraduate[index] = $scope.education[index].end;

    $scope.chosenEducation = index;
  }

  // Save info
  $scope.saveEducation = function(index)
  {
    $scope.education[index].university = $scope.modelSchool[index];
    $scope.education[index].degree = $scope.modelDegree[index];
    $scope.education[index].start = $scope.modeldateAttended[index];
    $scope.education[index].end = $scope.modeldateGraduate[index];
    $scope.cancelEducation();
  }
  
  // Show editor dialog
  $scope.educationEditorEnabled = function(index)
  {
    if ($scope.chosenEducation == index)
        return true;
    return false;
  }

  // Cancel editor dialog
  $scope.cancelEducation = function()
  {
    $scope.chosenEducation = -1;
  }

  // Remove education
  $scope.removeEducation = function(index)
  {
    $scope.education.splice(index, 1);
    $scope.cancelEducation();
  }

  // Show/Hide editor icon
  $scope.enterEducation = function()
  {
    $scope.educationEditorIconEnabled = true;
  }

  $scope.leaveEducation = function()
  {
    $scope.educationEditorIconEnabled = false;
  }

  // ----Add new education
  $scope.educationAddEnabled = false;
  $scope.year = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,
    2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];

  // Open New Education Dialog
  $scope.clickAddEducation = function()
  {
    // reset
    $scope.newSchool = "";
    $scope.degree = "";
    $scope.description = "";
    $scope.educationAddEnabled = true;
  }

  // Cancel Adding new education
  $scope.cancelNewEducation = function()
  {
    $scope.educationAddEnabled = false;
  }

  // Save new education
  $scope.saveNewEducation = function()
  {
    // add
    $scope.newItem = {"university": $scope.newSchool, "degree": $scope.degree, "start": $scope.dateAttended, "end":
    $scope.dateGraduate, "image": "./images/universitylogo.png"};
    $scope.education.push($scope.newItem);
    $scope.cancelNewEducation();
  }
});
