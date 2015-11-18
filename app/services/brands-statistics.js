import Ember from 'ember';
import BrandPickingRecords from 'semrush/models/brand-picking-records';

export default Ember.Service.extend({

  brandPickingRecords: BrandPickingRecords.create(),

  getStatistics(){
    return new Ember.RSVP.Promise((resolve, reject) => {
      let records = this.get('brandPickingRecords');

      if (records.get('length') > 0) {
        resolve(records.get('content'));
      } else {
        reject('Statistics is not available right now.');
      }
    });
  },

  increasePickedNumberForBrand(brand) {
    let records = this.get('brandPickingRecords');
    let brandRecord = records.findBy('brand', brand);
    let currentNumber = brandRecord.pickedNumber;

    records.removeObject(brandRecord);
    records.addObject({ brand: brand, pickedNumber: currentNumber + 1});
  }
});
