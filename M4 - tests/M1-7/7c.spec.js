const reduce = require("./7c").reduce;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("FUNCTION:reduce TESTS", () => {
    let add = (a, b) => a + b;
    let multiply = (a, b) => a * b;

  test(`Function should reduce correctly with adding callback`, () => {
    expect(reduce([1, 2, 3], add)).to.eql(6);
    expect(reduce([1], add)).to.eql(1);
  });
  test(`Function should throw an error when array is empty`, () => {
    expect(reduce([], add)).to.throw();
  });
  test(`Function should reduce correctly`, () => {
    expect(reduce([1, 2, 3], multiply)).to.eql(6);
    expect(reduce([1], multiply)).to.eql(6);
  });

});
