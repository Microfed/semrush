import Ember from 'ember';
import CarsListMixin from 'semrush/mixins/cars-list-mixin';

const { computed } = Ember;

export default Ember.Controller.extend(CarsListMixin, {
  cars: computed.filterBy('model', 'isChosen'),
  carsNumber: computed.reads('cars.length')
});

