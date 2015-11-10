import Ember from 'ember';
import fixtures from 'semrush/assets/fixtures';

export default Ember.Route.extend({
  beforeModel(){
    this.store.importData(fixtures, { json: false });
  }
});
