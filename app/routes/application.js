import Ember from 'ember';

// from https://github.com/funkensturm/ember-local-storage/blob/master/addon/helpers/storage.js
function tryStorage(name) {
  let nativeStorage;

  // safari private mode exposes xStorage but fails on setItem
  try {
    nativeStorage = (name === 'local') ? localStorage : sessionStorage;
    nativeStorage.setItem('emberlocalstorage.test', 'ok');
    nativeStorage.removeItem('emberlocalstorage.test');
  } catch (e) {
    nativeStorage = null;
  }

  return nativeStorage;
}

export default Ember.Route.extend({
  setupController(controller) {
    this._super.apply(this, arguments);

    let isStorageAvailable = !!tryStorage('local');
    controller.set('isStorageAvailable', isStorageAvailable);
  }
});
