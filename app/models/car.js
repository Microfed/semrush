import DS from 'ember-data';

export default DS.Model.extend({

  brand: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  isChosen: DS.attr('boolean')
});
