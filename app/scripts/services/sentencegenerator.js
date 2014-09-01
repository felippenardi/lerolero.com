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
        current,
        randomize,
        sentences;

    sentences = [
      "Frase 1",
      "Frase 2",
      "Frase 3"
    ];

    randomize = function () {
      var oldValue = current || "";
      do {
        var randomIndex = Math.floor(Math.random() * sentences.length);
        current = sentences[randomIndex];
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
