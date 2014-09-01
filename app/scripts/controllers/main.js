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

  });
