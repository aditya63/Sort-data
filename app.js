
angular.module('sortTable', [])
.controller('mainCtrl', function($scope, $http) {
  $http({method:'GET', url: 'https://launchlibrary.net/1.2/rocket'})
  .then(function successCallback(response){
    $scope.count=response.data.count;
    $scope.total=response.data.total;
    $scope.rocket= response.data.rockets;
  },
  function errorCallback(response){
    $scope.rocket= response.statusText;
  });

  $scope.title = "Sort Data";
  $scope.orderType= 'id' ;
  $scope.orderReverse = false;

  $scope.changeSortType = orderType =>{
    if($scope.orderType == orderType){
      $scope.orderReverse = !$scope.orderReverse;
    }else{
      $scope.orderType = orderType;
    }
  }

  $scope.isSortType = orderType => {
    return ($scope.orderType == orderType);
  }

  $scope.isOrderReverse = ordertype => {
    return !$scope.orderReverse;
  }
});
