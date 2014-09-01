'use strict';

describe('Service: sentenceGenerator', function () {

  // load the service's module
  beforeEach(module('leroLeroApp'));

  // instantiate service
  var sentenceGenerator;
  beforeEach(inject(function (_sentenceGenerator_) {
    sentenceGenerator = _sentenceGenerator_;
  }));

  it('provides a sentence', function () {
    expect(sentenceGenerator.get()).toEqual(jasmine.any(String));
  });

  it('does not repeat sentence', function () {
    var firstSentence = sentenceGenerator.get();
    expect(firstSentence).not.toEqual(sentenceGenerator.get());
  });

});
