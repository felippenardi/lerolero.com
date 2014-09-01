'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('leroLeroApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('shows a sentence on init', function () {
    expect(scope.sentence.current).toEqual(jasmine.any(String));
  });
});
