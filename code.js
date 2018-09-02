var myapp=angular.module('omdbapi',[])

.controller('ctrlSearchMovies', ['$scope', '$http' , function($scope,$http){
    $scope.items=[];
    $scope.fetchMovies=function(){        
        if($scope.searchMoviewName){            
            $http.get('http://www.omdbapi.com/?t='+$scope.searchMoviewName+'&apikey=3f28c229')
            .then(function(response){
                
                debugger
                if(response.data.Response ==='False'){
                    $scope.error="Result Not Found";
                                
                }
                else{
                    $scope.items.unshift($scope.searchMoviewName);
                    $scope.items=$scope.items.slice(0,5);
                    $scope.movies=response.data;    
                }
            },function(response){
               $scope.error="Network or Data Error, Please try again!!!";
            });
        }
        else{
            window.alert("Please enter something");
        }
    }
}]);