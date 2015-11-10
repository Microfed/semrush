import Ember from 'ember';

export default Ember.Controller.extend({

  selectedBrand: 'All',

  brands: ['All', 'Volvo', 'Ford', 'Mitsubishi', 'Nissan']
});

