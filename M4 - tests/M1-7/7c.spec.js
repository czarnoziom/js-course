const reduce = require("./7c").reduce;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("FUNCTION:reduce TESTS", () => {
    let add = (a, b) => a + b;
    let multiply = (a, b) => a * b;

  test(`Function should perform calculations with add callback exact as array.reduce()`, () => {
    expect(reduce([1, 2, 3], add)).to.eql([1, 2, 3].reduce(add));
    expect(reduce([1], add)).to.eql([1].reduce(add));
  });
  test(`Function should perform calculations with multiplay callback exact as array.reduce()`, () => {
    expect(reduce([1, 2, 3], add)).to.eql([1, 2, 3].reduce(multiply));
    expect(reduce([1], add)).to.eql([1].reduce(multiply));
  });
  test(`Function should throw an error when array is empty`, () => {
    expect(reduce([], add)).to.throw();
  });
});
