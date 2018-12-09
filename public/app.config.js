'use strict';

angular.
  module('scrollGradeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/problems', {
          template: '<problem-scroll></problem-scroll>'
        }).
        otherwise('/problems');
    }
  ]);
