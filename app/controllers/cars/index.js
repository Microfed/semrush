import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: 'All',

  brands: ['All', 'Volvo', 'Ford', 'Mitsubishi', 'Nissan'],

  actions: {

    chooseCar(car) {
      if (car) {
        car.set('isChosen', true);
        car.save(); // TODO: handle errors and loading time
      }
    }
  }
});

