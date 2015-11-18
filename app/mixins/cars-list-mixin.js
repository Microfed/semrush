import Ember from 'ember';

const { computed } = Ember;

const ALL_BRAND = 'All';

export default Ember.Mixin.create({
  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: ALL_BRAND,

  brands: computed('brandsService.brands', function () {
    return [ALL_BRAND].concat(this.get('brandsService.brands'));
  }),

  hasBrands: computed.notEmpty('brandsService.brands'),

  carsService: Ember.inject.service('cars'),
  brandsService: Ember.inject.service('brands'),

  actions: {

    toggleSelectedForCar(car) {
      this.get('carsService').toggleSelectedForCar(car)
        .catch((reason) => alert(reason));
    }
  }
});
