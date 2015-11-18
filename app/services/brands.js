import Ember from 'ember';
import fixtures from 'semrush/assets/fixtures';

const { computed } = Ember;

export default Ember.Service.extend({
  brands: computed('', function () {
    return fixtures.data.mapBy('attributes.brand').reduce((brands, brand) => ( brands.addObject(brand) ), []);
  })
});
