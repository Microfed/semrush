import Ember from 'ember';

const { computed } = Ember;

const ALL_BRAND = 'All';

export default Ember.Mixin.create({
  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: ALL_BRAND,

  brands: computed('model.[]', function () {
    return this.get('model').mapBy('brand').reduce((brands, brand) => ( brands.addObject(brand) ), [ALL_BRAND]);
  }),

  carsService: Ember.inject.service('cars'),

  actions: {

    toggleSelectedForCar(car) {
      this.get('carsService').toggleSelectedForCar(car)
        .catch((reason) => alert(reason));
    }
  }
});
