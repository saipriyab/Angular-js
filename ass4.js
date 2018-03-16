 angular.module('myApp', []).controller('personCtrl', function($scope) {  
    $scope.cdid= "123",  
    $scope.cdtitle = "xyz",
     $scope.cdprice= "100",  
    $scope.getAllDetails = function() {  
       return "CD id is"+ $scope.cdid+"CD title is"+ $scope.cdtitle+"CD price is"+$scope.cdprice;  
    }  
});  