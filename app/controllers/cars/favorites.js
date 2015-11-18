import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: 'All',

  brands: ['All', 'Volvo', 'Ford', 'Mitsubishi', 'Nissan'],

  cars: computed.filterBy('model', 'isChosen'),

  carsNumber: computed.reads('cars.length'),

  actions: {

    removeCar(car) {
      if (car) {
        car.set('isChosen', false);
        car.save(); // TODO: handle errors and loading time
      }
    }
  }
});

