var curryfyAll = require('./curryfy-all');

describe('curryfyAll', function () {
  it('will add new methods on to the given object', function () {
    var chicken = {
      tastelessWing: function (skin, bone) {
        return skin + bone;
      }
    };
    curryfyAll(chicken);

    assert.isFunction(chicken.tastelessWingCurry);
  });
});
