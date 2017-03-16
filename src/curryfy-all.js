var _ = require('lodash');
var suffix = 'Curry';

var addContext = _.curry(function addContext (context, fn) {
  if (!context) return fn;
  else return fn.bind(context);
});

function curryfyAll (object, options) {
  options = options || {};
  var curry = options.curry || _.curry;
  var contexter = addContext(options.context);

  var keys = Object.keys(object);
  keys.forEach(function (key) {
    if (!_.isFunction(object[key])) return;
    object[key + suffix] = contexter(curry(object[key]));
  });
  return object;
}

module.exports = curryfyAll;
