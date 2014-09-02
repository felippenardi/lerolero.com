'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('leroLeroApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, sentenceGenerator) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      sentenceGenerator: sentenceGenerator
    });
  }));

  it('shows a sentence on init', function () {
    expect(scope.sentence.current).toEqual(jasmine.any(String));
  });

  it('changes sentence', function () {
    var firstSentence = scope.sentence.current;
    scope.changeSentence();
    expect(scope.sentence.current).not.toEqual(firstSentence);
  });

  describe('Tweet sentence', function () {
    var nonTweetable,
        tweetable;

    beforeEach(function () {
      nonTweetable = "Caros amigos, a crescente influência da mídia causa "
                    + "impacto indireto na reavaliação do impacto na agilidade "
                    + "decisória.",
      tweetable = "Não obstante, a adoção de políticas descentralizadoras "
                  + "causa impacto indireto na reavaliação do fluxo de "
                  + "informações.";
    });

    it('tells when a sentence is tweetable', function () {
      scope.sentence.current = tweetable;
      expect(scope.isTweetable(tweetable)).toBe(true);
      scope.sentence.current = nonTweetable;
      expect(scope.isTweetable(nonTweetable)).toBe(false);
    });

    it('generates tweet message', function () {
      scope.sentence.current = tweetable;
      expect(scope.tweetMessage()).toBe(tweetable + " lerolero.com")
    });
  });

});
