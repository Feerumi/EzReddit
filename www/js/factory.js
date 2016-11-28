angular
    .module('redditApp')
    .factory('Posts', function($http) {
        var mainSource = 'https://www.reddit.com/r/';
        var templateStart = 'https://www.reddit.com';
        var templateEnd = '';

        return {
            getPosts: function(ending) {
                console.log(ending);
                if(ending === undefined) {
                    return $http.get(mainSource + 'all' + '/.json');
                }
                return $http.get(mainSource + ending +'/.json');
            },
            getComments: function() {
                return $http.get(templateStart+templateEnd+'.json');
            },
            updateTemplateEnd: function(ending) {
                console.log('updating comments url');
                templateEnd = ending;
            }

        }
    });
