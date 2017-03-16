var curryfyAll = require('./curryfy-all');
var sinon = require('sinon');

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

  it('curries the new methods on object', function () {
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

  it('allows to use custom method to do the currying', function () {
    var curryFn = sinon.spy();
    var turkey = {
      tastelessWing: function (skin, bone) {
        return skin + bone;
      }
    };
    curryfyAll(turkey, { curry: curryFn });

    sinon.assert.calledWith(curryFn, turkey.tastelessWing);
  });

  it('gives possibility to hard bind the object', function () {
    var fakeContext = {};
    var coupledObject = {
      doMagic: function () {
        return this;
      }
    };
    curryfyAll(coupledObject, { context: fakeContext });

    assert.equal(fakeContext, coupledObject.doMagicCurry(1, 2));
  });
});
