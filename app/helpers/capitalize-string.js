import Ember from 'ember';

export function capitalizeString(params/*, hash*/) {
  let string = (params[0] || '').toString(); // in case of numbers and so on
  let capitalized = string.charAt(0).toUpperCase() + string.substring(1);

  return Ember.String.htmlSafe(capitalized);
}

export default Ember.Helper.helper(capitalizeString);
