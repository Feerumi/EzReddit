angular
    .module('redditApp')
    .factory('Posts', function($http) {
        var dataSource = 'https://www.reddit.com/.json';

        return {
            getPosts: function() {
                return $http.get(dataSource);
            }
            getComments: function() {
                return $http.get(dataSource);
            }
        }
    });
