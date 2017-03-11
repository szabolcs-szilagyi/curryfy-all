var suffix = 'Curry';

function curryfyAll (object) {
  var keys = Object.keys(object);
  keys.forEach(function (key) {
    object[key + suffix] = object[key];
  });
  return object;
}

module.exports = curryfyAll;
