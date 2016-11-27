angular
    .module('redditApp')
    .controller('PostsController', function(Posts, $scope, $ionicLoading) {
        var _this = this;
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Posts.getPosts().then(function(response){
                _this.reddit = response.data;
                $scope.posts = _this.reddit.data.children;
                console.log($scope.posts);
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });

        $scope.openComments = function() {
            Posts.getComments().then(function(response){

            }).catch(function(response) {

            }).finally(function(){

            });
        }
    })
