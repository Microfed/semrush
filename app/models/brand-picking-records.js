import StorageArray from 'ember-local-storage/local/array';

export default StorageArray.extend({
  storageKey: 'semrush-brand-picking-records',

  initialContent: [
    {
      brand: "Volvo",
      pickedNumber: 0
    },
    {
      brand: "Nissan",
      pickedNumber: 0
    },
    {
      brand: "Mitsubishi",
      pickedNumber: 0
    },
    {
      brand: "Ford",
      pickedNumber: 0
    }
  ]
});
