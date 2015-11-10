import Ember from 'ember';

export default Ember.Component.extend({

  selectedOption: null,

  actions: {

    select: function (option) {
      this.set('selectedOption', option);
    }
  }
});
