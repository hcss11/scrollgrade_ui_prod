'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('problemScroll').
  component('problemScroll', {
    templateUrl: 'problem-scroll/problem-scroll.template.html',
    controller: [
      function ProblemListController() {
        var self = this;

        self.header = "Scroll Grade Test";

        self.nodes = 2;

        self.findLongestSubsequence = function(array) {
          var longestPartialSubsequences = [];
          var longestSubsequenceOverAll = [];
          console.log(array);

          for (var i = 0; i < array.length; i++) {
            var valueAtI = array[i];
            var subsequenceEndingAtI = [];

            for (var j = 0; j < i; j++) {
              var subsequenceEndingAtJ = longestPartialSubsequences[j];
              var valueAtJ = array[j];

              if (valueAtJ < valueAtI &&
                  subsequenceEndingAtJ.length > subsequenceEndingAtI.length) {
                subsequenceEndingAtI = subsequenceEndingAtJ;
              }
            }

            longestPartialSubsequences[i] = subsequenceEndingAtI.concat();
            longestPartialSubsequences[i].push(valueAtI);

            if (longestPartialSubsequences[i].length > longestSubsequenceOverAll.length) {
              longestSubsequenceOverAll = longestPartialSubsequences[i];
            }
          }

          console.log(longestSubsequenceOverAll);
          return longestSubsequenceOverAll;
        };

        self.sequence = [];

        self.longestsequence = [];

        self.addToSequence = function() {
          if (null != self.number){
            self.sequence.push(parseInt(self.number,10));
            self.number = null;
            //self.arr = self.sequence;
            self.longestsequence = self.findLongestSubsequence(self.sequence);
          }
        };

        self.clearSequence = function() {
          self.sequence = [];
          self.longestsequence = [];
        };
      }
    ]
  });
