'use strict';

/**
 * @ngdoc overview
 * @name leroLeroApp
 * @description
 * # leroLeroApp
 *
 * Main module of the application.
 */
angular
  .module('leroLeroApp', [
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
