import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

  // waiting for https://github.com/thoov/ember-redirect/issues/14 to resolve
  redirects: {
    'index': 'cars'
  }
});

Router.map(function() {
  this.route('cars', function() {
    this.route('statistics');
    this.route('favorites');
  });
});

export default Router;
