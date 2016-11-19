const doesContain = function(array, element) {
  return array.indexOf(element) !== -1;
};

const doesContainAll = function(array, values) {
  return values.every((element) => doesContain(array, element));
};

const doesContainAny = function(array, values) {
  return values.some((element) => doesContain(array, element));
};

const compare = function(actual, expected) {
  return actual.every((value, index) => value === expected[index]);
};

module.exports = (chai) => {

  chai.Assertion.addMethod('containing', function(value) {
    this.assert(
      doesContain(this._obj, value),
      `expected #{this} to be containing ${value}`,
      `expected #{this} not to be containing ${value}`
    );
  });

  chai.Assertion.addMethod('containingAllOf', function(values) {
    this.assert(
      doesContainAll(this._obj, values),
      `expected #{this} to be containing all of [${values}]`,
      `expected #{this} not to be containing all of [${values}]`
    );
  });

  chai.Assertion.addMethod('containingAnyOf', function(values) {
    this.assert(
      doesContainAny(this._obj, values),
      `expected #{this} to be containing any of [${values}]`,
      `expected #{this} not to be containing any of [${values}]`
    );
  });

  chai.Assertion.addMethod('equalTo', function(values) {
    this.assert(
      compare(this._obj, values),
      `expected #{this} to be equal to [${values}]`,
      `expected #{this} not to be equal to [${values}]`
    );
  });

  chai.Assertion.addMethod('ofSize', function(length) {
    this.assert(
      this._obj.length === length,
      `expected #{this} to be of size ${length}`,
      `expected #{this} not to be of size ${length}`
    );
  });

};
