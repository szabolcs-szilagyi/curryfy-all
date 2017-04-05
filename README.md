# curryfyAll

--------------------------------------------------------------------------------

# Introduction

Sum it up in an image:
![curry all the things](https://cloud.githubusercontent.com/assets/2981123/24675242/b5cd43d6-197e-11e7-8a06-eb8cb18ee560.jpg)

This module has been inspired by the `promisifyAll` method from the bluebird
promise library, to give an easy way to curry all the methods on an object. The
current implementation is a working but naive one. If you feel that it misses
the spot for you, don't be shy to open a ticket about it.

Similarly to the `promisifyAll` method, this package will add new methods on the
provided object. The new methods will get a `Curry` suffix, e.g.: if there is a
`makeSoupe` method on an object, then it will create a `makeSoupeCurry` method
on the same object.


# Installation

The usual `npm` command:
```bash
npm install --save-exact currfy-all
```


# Usage
```javascript
const curryfyAll = require('curryfy-all');

const myTastelessObject = {
  soupe (water, vegetables) {
    return [water].concat(vegetables).join(' ~ ');
  },

  cook (stow, baseSoupe) {
    return `${stow} heating up ${baseSoupe}`;
  }
}

curryfyAll(myTastelessObject);

// start cooking with curry (I know, it is an old joke, but still.. :laughing:)
const preparedWater = myTastelessObject.soupeCurry('clean water');
const heatedStow = myTastelessObject.cookCurry('fiery furnace');
const cookVegetables = _.flow([preparedWater, heatedStow]);

console.log(cookVegetables(['carrots', 'potato']));
// in console: "fiery furnace heating up clean water ~ carrots ~ potato"
```


# API

- [`curry`](#curry) - Can provide custom curry method via this property
- [`context`](#context) - The object provided here will be hard binded as the
  context of `this`


## Examples for customization

### curry

```javascript
const curry = require('curry'); // some other curry method

const someObj = {
  add (a, b) {
    return a + b;
  }
};

curryfyAll(someObj, { curry });
```


### context

```javascript
const someObj = {
  doNastyThingOnThis (a, b) {
    this.sum = a + b;
  }
};

const fakeContext = {};

curryfyAll(someObj, { context: fakeContext });
// `doNastyThingOnThisCurry` will have the `fakeContext` bind to `this`
// `doNastyThingOnThis` is untouched, so will have `someObj` for this context
```
