import Ember from 'ember';

const { computed } = Ember;

const ALL_BRAND = 'All';

export default Ember.Controller.extend({

  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: ALL_BRAND,

  brands: computed('model.[]', function () {
    return this.get('model').mapBy('brand').reduce((brands, brand) => ( brands.addObject(brand) ), [ALL_BRAND]);
  }),

  statistics: Ember.inject.service('brands-statistics'),

  actions: {

    chooseCar(car) {
      if (car) {
        car.set('isChosen', true);
        car.save()
          .then(() => this.get('statistics').increasePickedNumberForBrand(car.get('brand')))
          .catch((reason) => car.rollback()); // TODO: show the error to the use
      }
    }
  }
});
