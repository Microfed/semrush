import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('image-preview', 'Integration | Component | image preview', {
  integration: true
});

const one_pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

var getBackgroundImageURI = function ($el) {
  if ($el) {
    return $el.css('background-image') || '';
  } else {
    return '';
  }
};

test('it renders', function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{image-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#image-preview}}
      template block text
    {{/image-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('should display an image thumbnail', function (assert) {
  assert.expect(1);

  this.set('imageURI', one_pixel);

  this.render(hbs`{{image-preview imageURI=imageURI}}`);

  assert.equal(this.$('img').attr('src'), one_pixel);
});

test('should display a placeholder if imageURI is empty', function (assert) {
  assert.expect(1);

  this.render(hbs`{{image-preview imageURI=''}}`);

  let backgroundImageURI = getBackgroundImageURI(this.$('.small-thumbnail-default-placeholder'));

  assert.ok(backgroundImageURI.indexOf('/assets/images/placeholder-150x150.png') > -1);
});

test('should display a placeholder if the image is not available', function (assert) {
  assert.expect(1);

  this.render(hbs`{{image-preview imageURI='not-available.png'}}`);

  Ember.run(() => {
    this.$('img').on('error', () => {
      let backgroundImageURI = getBackgroundImageURI(this.$('.small-thumbnail-default-placeholder'));

      assert.ok(backgroundImageURI.indexOf('/assets/images/placeholder-150x150.png') > -1);
    });
  });
});
