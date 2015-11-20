import { moduleForModel, test } from 'ember-qunit';

moduleForModel('car', 'Unit | Model | car', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it should have specific properties', function(assert) {
  var model = this.subject();
  var attributes = model.get('constructor.attributes');
  var expectedAttributes = ['brand', 'description', 'image'];

  expectedAttributes.forEach(attr => assert.ok(attributes.has(attr)));
});
