 'use strict';

app.controller("GroupListCtrl", function($scope, $location, $rootScope, GroupFactory){
  $scope.welcome = "hello";
  $scope.groups = [];


let getGroups = function(){
  GroupFactory.getGroupList($rootScope.user.uid).then(function(fbGroups){
    $scope.groups = fbGroups;
  });
};

getGroups();

  $scope.showNewGroupPage = function(){
    $location.url("/groups/new");
  };

  $scope.showNewEventPage = function(){
    $location.url("/events/new");
  };

  $scope.showEventPage = function(){
    $location.url("/events/list");
  };

  $scope.showPeoplePage = function(){
    $location.url("/people/list");
  };

  $scope.showGroupsPage = function(){
  $location.url("/groups/list");
  };

  $scope.allGroups = function(){
    $scope.showListView = true;
  };

  $scope.newGroup = function(){
    $scope.showListView = false;
  };


$scope.deleteGroup = function(groupId){
  GroupFactory.deleteGroup(groupId).then(function(response){
    getGroups();
  });
};

$scope.inputChange = function(thingy){
  GroupFactory.editGroup(thingy).then(function(response){
  });
};

});