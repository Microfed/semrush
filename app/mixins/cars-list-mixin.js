import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({

  queryParams: ['brand'],

  carsService: Ember.inject.service('cars'),
  brandsService: Ember.inject.service('brands'),
  i18n: Ember.inject.service('i18n'),

  allBrandLabel: computed('i18n', function () {
    return this.get('i18n').t('cars.index.filter-all-label').toString();
  }),

  brand: computed.alias('selectedBrand'),

  selectedBrand: 'All',

  brands: computed(['brandsService.brands', 'allBrandLabel'], function () {
    return [this.get('allBrandLabel')].concat(this.get('brandsService.brands'));
  }),

  hasBrands: computed.notEmpty('brandsService.brands'),

  selectAllBrand: function () {
    this.set('selectedBrand', this.get('allBrandLabel'));
  }.on('init'),

  actions: {

    toggleSelectedForCar(car) {
      this.get('carsService').toggleSelectedForCar(car)
        .catch((reason) => alert(reason));
    }
  }
});
