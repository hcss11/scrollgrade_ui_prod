'use strict';

// Register `coming-soon` component, along with its associated controller and template
angular.
  module('comingSoon').
  component('comingSoon', {
    templateUrl: 'coming-soon/coming-soon.template.html',
    controller: ['$sce','signupFactory','$mdColorPalette',
      function ProblemListController($sce, signupFactory, $mdColorPalette) {
        var self = this;

        self.colors = Object.keys($mdColorPalette);

        console.log(self.colors);

        self.header = "Scroll Grade Test";

        self.nodes = 2;

        self.videoSource = $sce.trustAsResourceUrl("//www.youtube.com/embed/YkuA0NE1f5w");

        self.user = {
          name: '',
          email: '',
          school: ''
        };

        self.signedUp = true;

        self.signupClick = function() {
          signupFactory.signupUser(self.user).then(function(response) {
            if (response.status == 201) {
              self.signedUp = false;
              self.signedUpUser = response.data;
              self.user.name = '';
              self.user.email = '';
              self.user.school = '';
            }
          });
        };
      }
    ]
  });
