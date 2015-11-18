import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: 'All',

  brands: ['All', 'Volvo', 'Ford', 'Mitsubishi', 'Nissan'],

  statistics: Ember.inject.service('brands-statistics'),

  actions: {

    chooseCar(car) {
      if (car) {
        car.set('isChosen', true);
        car.save(); // TODO: handle errors and loading time

        this.get('statistics').increasePickedNumberForBrand(car.get('brand'));
      }
    }
  }
});
