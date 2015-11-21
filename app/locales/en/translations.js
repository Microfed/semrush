export default {
  // "some.translation.key": "Text for some.translation.key",
  //
  // "a": {
  //   "nested": {
  //     "key": "Text for a.nested.key"
  //   }
  // },
  //
  // "key.with.interpolation": "Text with {{anInterpolation}}"

  'application': {
    'header': 'Pick a Car, Carl!',
    'localstorage-error': 'Local storage is not available. Changes will not be stored.'
  },

  'cars': {
    'nav-menu-links': {
      'cars-index': 'Cars',
      'cars-favorites': 'Your cars',
      'cars-statistics': 'Statistics'
    },

    'index': {
      'filter-label': 'Brands',
      'filter-all-label': 'all',
      'empty-cars-list': 'There will be tons of metal here soon!'
    },

    'favorites': {
      'cars-picked': {
        'one': 'One {{brand}} car picked',
        'other': '{{count}} {{brand}} cars picked'
      },
      'empty-cars-list': {
        'message': 'Here will be all your cars. Choose one from our ',
        'marketplace-link': 'marketplace'
      }
    },

    'statistics': {
      'chart-title': 'Brand over picking history',
      'no-chart-data': 'There is not actual statistics for now. Come back later!'
    }
  },

  'car-list-item': {
    'car-selected-message': 'It\'s one of your favorite car, Carl!',
    'choose-car-button-label': 'Choose this car',
    'remove-car-button-label': 'Remove this car'
  }
};
