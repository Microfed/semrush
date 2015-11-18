import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  queryParams: ['brand'],

  brand: computed.alias('selectedBrand'),

  selectedBrand: 'All',

  brands: ['All', 'Volvo', 'Ford', 'Mitsubishi', 'Nissan'],

  cars: computed.filterBy('model', 'isChosen'),

  carsNumber: computed.reads('cars.length'),

  carsService: Ember.inject.service('cars'),

  actions: {

    removeCar(car) {
      this.get('carsService').toggleChosenForCar(car)
        .catch((reason) => alert(reason));
    }
  }
});

