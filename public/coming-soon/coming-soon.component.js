'use strict';

// Register `coming-soon` component, along with its associated controller and template
angular.
  module('comingSoon').
  component('comingSoon', {
    templateUrl: 'coming-soon/coming-soon.template.html',
    controller: ['$sce',
      function ProblemListController($sce) {
        var self = this;

        self.header = "Scroll Grade Test";

        self.nodes = 2;

        self.videoSource = $sce.trustAsResourceUrl("//www.youtube.com/embed/YkuA0NE1f5w");

      }
    ]
  });
