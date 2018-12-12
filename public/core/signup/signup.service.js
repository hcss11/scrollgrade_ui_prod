angular.module('core.signup')
    .factory('signupFactory', signupFactory);

    function signupFactory($http) {
        return {
            signupUser: signupUser
        };

        function signupUser (user) {
            return $http.post('/api/signup/', user).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }
    }
