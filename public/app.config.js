'use strict';

angular.
  module('scrollGradeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/hello', {
          template: '<coming-soon></coming-soon>'
        }).
        otherwise('/hello');
    }
  ]);
