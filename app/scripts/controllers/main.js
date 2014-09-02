'use strict';

/**
 * @ngdoc function
 * @name leroLeroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leroLeroApp
 */
angular.module('leroLeroApp')
  .controller('MainCtrl', function ($scope, sentenceGenerator) {

    $scope.sentence = {
      current: sentenceGenerator.get()
    };

    $scope.changeSentence = function () {
      $scope.sentence.current = sentenceGenerator.get();
    };

    $scope.isTweetable = function (sentence) {
      if ($scope.sentence.current.length <= 117) {
        return true;
      } else {
        return false;
      }
    };

    $scope.tweetMessage = function() {
      return $scope.sentence.current + " lerolero.com";
    };

  });
