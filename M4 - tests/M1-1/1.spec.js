const howOldAreYou = require("./1").howOldAreYou;

const chai = require("chai"),
  expect = chai.expect;

describe("FUNCTION: howOldAreYou TESTS", () => {
  test("Function should return number", () => {
    const testDate = 1991;
    expect(typeof howOldAreYou(testDate)).to.equal("number");
  });
  test("Function should return correct age", () => {
    const testDate = 1991;
    const testAge = new Date().getFullYear() - testDate;
    expect(howOldAreYou(testDate)).to.equal(testAge);
  });
});
