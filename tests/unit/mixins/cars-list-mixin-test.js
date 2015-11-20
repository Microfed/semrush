import Ember from 'ember';
import CarsListMixinMixin from '../../../mixins/cars-list-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | cars list mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var CarsListMixinObject = Ember.Object.extend(CarsListMixinMixin);
  var subject = CarsListMixinObject.create();
  assert.ok(subject);
});
