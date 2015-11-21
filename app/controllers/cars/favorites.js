import Ember from 'ember';
import CarsListMixin from 'semrush/mixins/cars-list-mixin';

const { computed } = Ember;

export default Ember.Controller.extend(CarsListMixin, {
  i18n: Ember.inject.service(),

  cars: computed.filterBy('model', 'isChosen'),
  carsNumber: computed.reads('cars.length'),

  carsPickedLabel: computed('i18n', 'selectedBrand', function () {
    var selectedBrand = this.get('selectedBrand') || '';

    if (selectedBrand === this.get('allBrandLabel')) {
      selectedBrand = '';
    }

    return this.get('i18n').t('cars.favorites.cars-picked', {
      count: this.get('carsNumber'),
      brand: selectedBrand.capitalize()
    });
  })
});

