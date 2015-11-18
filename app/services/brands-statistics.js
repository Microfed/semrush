import Ember from 'ember';
import BrandPickingRecords from 'semrush/models/brand-picking-records';

export default Ember.Service.extend({

  brandPickingRecords: BrandPickingRecords.create(),

  getStatistics(){
    return new Ember.RSVP.Promise((resolve, reject) => {
      let records = this.get('brandPickingRecords');
      resolve(records.get('content'));
    });
  },

  increasePickedNumberForBrand(brand) {
    let records = this.get('brandPickingRecords');
    let brandRecord = records.findBy('brand', brand) || {};
    let currentNumber = brandRecord.pickedNumber || 0;

    records.removeObject(brandRecord);
    records.addObject({ brand: brand, pickedNumber: currentNumber + 1 });
  }
});
