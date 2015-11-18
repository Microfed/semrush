import Ember from 'ember';

export default Ember.Route.extend({
  statistics: Ember.inject.service('brands-statistics'),

  model() {
    // should be api call fetching array from a backend
    return this.get('statistics').getStatistics();
  }
});
