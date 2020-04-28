const array1 = require("./4").array1;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("ARRAY:array1 TESTS", () => {
  test("array1 should be an array", () => {
    expect(array1).to.be.array();
  });
  test("all elements in array1 should be an arrays", () => {
    for (i in array1) expect(array1[i]).to.be.array();
  });
  test("array1 should have lenght 10", () => {
    expect(array1).to.be.ofSize(10);
  });
  test("all elements in array1 should have lenght 10", () => {
    for (i in array1) expect(array1[i]).to.be.ofSize(10);
  });
  test("all elements in array1 should be arrays with numbers", () => {
    for (i in array1) {
      for (j in array1[i]) expect(typeof array1[i][j]).to.equal("number");
    }
  });
  test("all elements in array1 should be arrays with numbers from 0 to 99", () => {
    for (i in array1) {
      for (j in array1[i]) expect(typeof array1[i][j]).to.be.within(0, 99);
    }
  });
  test("all elements in array1 should be arrays with integers", () => {
    for (i in array1) {
      for (j in array1[i]) expect(Number.isInteger(array1[i][j])).to.be.true;
    }
  });
});
