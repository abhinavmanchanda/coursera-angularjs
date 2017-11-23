(function () {
'use strict';

angular.module('TooMuchFoodApp', [])
.controller('TooMuchFoodController', TooMuchFoodController);

TooMuchFoodController.$inject = ['$scope'];
function TooMuchFoodController($scope) {
  $scope.dishNames = '';
  $scope.message = '';
  $scope.checkIfTooMuch = function () {
    var numberOfItems = $scope.dishNames.split(",").length;
    if(!$scope.dishNames){
      $scope.message = "Please enter data first";
    } else if (numberOfItems <= 3) {
      $scope.message = "Enjoy!"
    } else {
      $scope.message = "Too much!"
    }
  };
}

})();
