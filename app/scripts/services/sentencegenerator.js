'use strict';

/**
 * @ngdoc service
 * @name leroLeroApp.sentenceGenerator
 * @description
 * # sentenceGenerator
 * Returns a random LeroLero sentence.
 */
angular.module('leroLeroApp')
  .factory('sentenceGenerator', function () {
    // Service logic
    var sentenceGenerator = {},
        current = "",
        randomize,
        sentences;

    sentences = [
      [
        "A 1, ",
        "A 2, ",
        "A 3, "
      ],
      [
        "B 1, ",
        "B 2, ",
        "B 3, "
      ],
      [
        "C 1, ",
        "C 2, ",
        "C 3, "
      ],
      [
        "D 1.",
        "D 2.",
        "D 3."
      ]
    ];

    randomize = function () {
      var oldValue = current;
      do {
        current = "";
        sentences.each(function (args, index) {
          current = current.add(sentences[index].sample());
        });
      } while (oldValue === current);
    };

    // Public API here
    return {
      get: function () {
        randomize();
        return current;
      }
    };

  });
