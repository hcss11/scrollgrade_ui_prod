'use strict';

angular.
  module('scrollGradeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/comingSoon', {
          template: '<coming-soon></coming-soon>'
        }).
        otherwise('/comingSoon');
    }
  ]);
