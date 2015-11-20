import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-one-dimension', 'Integration | Component | filter one dimension', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-one-dimension}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#filter-one-dimension}}
      template block text
    {{/filter-one-dimension}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('changes selectOption accordingly to user\'s selection', function (assert) {
  assert.expect(2);

  this.set('options', [1, 2, 3]);
  assert.equal(this.get('selectedOption'), null);

  this.render(hbs`{{filter-one-dimension selectedOption=selectedOption options=options}}`);

  this.$('button[aria-label="1"]').click();

  assert.equal(this.get('selectedOption'), 1);
});
