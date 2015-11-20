import Ember from 'ember';
import fixtures from 'semrush/assets/fixtures';

export default Ember.Route.extend({
  beforeModel(){
    // Push fixtures if it's first time loading
    return this.store.findAll('car').then(cars => {
      if (cars.get('length') === 0) {
        this.store.importData(fixtures, { json: false });
      }
    });
  }
});
