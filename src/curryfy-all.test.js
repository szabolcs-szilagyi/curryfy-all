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

  it('curries new methods on object', function () {
    var chicken = {
      tastelessWing: function (skin, bone) {
        return skin + bone;
      }
    };
    curryfyAll(chicken);

    var chickenSkin = chicken.tastelessWingCurry('skin');
    assert.isFunction(chickenSkin);
    assert.equal(chickenSkin('bone'), 'skinbone');
  });

  it('allows to use custom method to do the currying');

  it('gives possibility to hard bind the object');
});
