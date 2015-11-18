import Ember from 'ember';

export default Ember.Service.extend({

  statistics: Ember.inject.service('brands-statistics'),

  toggleChosenForCar: function (car) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (car) {
        car.toggleProperty('isChosen');

        car.save()
          .then((savedCar) => {
            if (car.get('isChosen')) {
              this.get('statistics').increasePickedNumberForBrand(car.get('brand'))
            }

            resolve(savedCar);
          })
          .catch((reason) => {
            car.toggleProperty('isChosen'); //TODO: use rollback() for JSONAdapter

            reject(new Error('semrush/services/cars::toggleChosenForCar couldn\'t save state for the car', car));
          });
      } else {
        throw new Error('semrush/services/cars::toggleChosenForCar car is empty');
      }
    });
  }
});
