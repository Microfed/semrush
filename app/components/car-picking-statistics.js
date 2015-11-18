import Ember from 'ember';

let { computed, get } = Ember;

export default Ember.Component.extend({

  chartOptions: {
    responsive: true,
    maintainAspectRatio: false
  },

  /**
   * Source for the statistics.
   * Expected format:
   *   [
   *     { brand: String, pickedNumber: Number }
   *   ]
   */
  data: [],

  chartData: computed('data', function () {
    let stats = this.get('data');
    let brands = stats.mapBy('brand');

    return {
      labels: brands,
      datasets: [
        {
          label: 'Car picking',
          data: brands.map(brand => get(stats.findBy('brand', brand), 'pickedNumber'))
        }
      ]
    };
  })
});
