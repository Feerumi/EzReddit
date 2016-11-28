var redditApp = angular.module('redditApp');

redditApp.controller('PostsController', function(Posts, $scope, $ionicLoading) {
        var _this = this;
        $scope.searchInput = {};
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Posts.getPosts().then(function(response){
                _this.reddit = response.data;
                $scope.posts = _this.reddit.data.children;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });

        $scope.openComments = function(permalink) {
            Posts.updateTemplateEnd(permalink);
        };

        $scope.updateReddit = function(){
            console.log('updating');
            $ionicLoading.show();
            Posts.getPosts($scope.searchInput.value).then(function(response){
                _this.reddit = response.data;
                $scope.posts = _this.reddit.data.children;
                console.log($scope.posts);
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        }
    })

redditApp.controller('CommentsController', function(Posts, $scope, $ionicLoading) {
    var _this = this;
    $scope.$on('$ionicView.enter', function(){
        $ionicLoading.show();
        Posts.getComments().then(function(response){
            _this.reddit = response.data;
            $scope.content = _this.reddit[0].data.children[0].data;
            $scope.comments = _this.reddit[1].data.children;

        }).catch(function(response){
            //request was not successful
            //handle the error
        }).finally(function(){
            $ionicLoading.hide();
        });
    });

    $scope.parseHTML = function(data) {
        var decode = $('<div />').html(data.body_html).text();
        $('#'+data.id).html(decode);
    }
});
