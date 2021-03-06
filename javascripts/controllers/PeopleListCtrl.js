 'use strict';

app.controller("PeopleListCtrl", function($scope, $location, $rootScope, PeopleFactory){
  $scope.welcome = "hello";
  $scope.people = [];


let getPeople = function(){
  PeopleFactory.getPeopleList($rootScope.user.uid).then(function(fbPeople){
    $scope.people = fbPeople;
  });
};

getPeople();

  $scope.showNewEventPage = function(){
    $location.url("/events/new");
  };

  $scope.showPeoplePage = function(){
    $location.url("/people/list");
  };

  $scope.showGroupsPage = function(){
  $location.url("/groups/list");
  };

    $scope.showEventPage = function(){
    $location.url("/events/list");
  };


  $scope.showNewPersonPage = function(){
    $location.url("/people/new");
  };

  $scope.allPeople = function(){
    $scope.showListView = true;
  };

  $scope.newPerson = function(){
    $scope.showListView = false;
  };


$scope.deletePerson = function(personId){
  PeopleFactory.deletePerson(personId).then(function(response){
    getPeople();
  });
};

$scope.inputChange = function(thingy){
  PeopleFactory.editPerson(thingy).then(function(response){
  });
};


});