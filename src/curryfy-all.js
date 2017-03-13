var _ = require('lodash');
var suffix = 'Curry';

function curryfyAll (object) {
  var keys = Object.keys(object);
  keys.forEach(function (key) {
    object[key + suffix] = _.curry(object[key]);
  });
  return object;
}

module.exports = curryfyAll;
