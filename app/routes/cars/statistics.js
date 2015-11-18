import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.findAll('brandPickingRecord');
    return [
      {
        brand: 'Volvo',
        pickedNumber: 0
      },
      {
        brand: 'Ford',
        pickedNumber: 1
      },
      {
        brand: 'Nissan',
        pickedNumber: 2
      },
      {
        brand: 'Mitsubishi',
        pickedNumber: 3
      }
    ]
  }
});
