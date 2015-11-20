import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'semrush/tests/helpers/start-app';

module('Acceptance | first page', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('First page should be \'/cars\'', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/cars');
  });
});
