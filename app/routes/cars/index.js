import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    brand: {
      refreshModel: true
    }
  },

  model: function (params) {
    // if we looking for all brands
    if (params.brand === 'all') {
      // then remove this param from query to match all 'brand' values
      delete params.brand;
    }

    // filter property needed only for localstorage! For common adapter use just the params object
    return this.store.query('car', { filter: params });
  }
});
