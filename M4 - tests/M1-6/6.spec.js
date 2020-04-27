const numbers = require("./6").numbers;
const getEvenNumbersInArray = require("./6").getEvenNumbersInArray;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("ARRAY:Numbers TESTS", () => {
  test("'Numbers' should be an array", () => {
    expect(numbers).to.be.array();
  });

  test("All 'numbers' array elements should be numbers", () => {
    for (i in numbers) expect(typeof(numbers[i])).to.equal('number');
  });

  test("All 'numbers' array elements should be integer", () => {
    for (i in numbers) expect(Number.isInteger(numbers[i])).to.be.true;
  });
});

describe("FUNCTION:'getEvenNumbersInArray' TESTS", () => {
  test("Fuction getEvenNumbersInArray should return array", () => {
    const result = getEvenNumbersInArray(numbers);
    expect(result).to.be.array();
  });

  test("Fuction getEvenNumbersInArray should return array with numbers from 'numbers' array", () => {
    const result = getEvenNumbersInArray(numbers);
    for (i in result) expect(numbers).to.include(result[i]);
  });

  test("Fuction getEvenNumbersInArray should return array with  even numbers", () => {
    const result = getEvenNumbersInArray(numbers);
    for (i in result) expect(result[i] % 2).to.equal(0);
  });
});
