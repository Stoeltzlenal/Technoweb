var app = angular.module("app", []);

app.controller('mainCtrl', function($scope, $http){
  $http({
    method: 'GET',
    url: 'https://api.edamam.com/recipes/chicken'
  }).succes(function(data){
    $scope.objects = data;
    console.log(data);
  }).catch(function(response){
    console.log('response', response);
  })



})
