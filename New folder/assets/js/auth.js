'use strict';
app.service('authService', ['$http', '$q', '$scope', '$localStorage','$sessionStorage','$location', function ($http, $q, $scope, $localStorage, $sessionStorage, $location) {



    $scope.fillAuthData = function () {

        var authAcToken = $localStorage.TokenKey;
		console.log(authAcToken);   

    };





}]);