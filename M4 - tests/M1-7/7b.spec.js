const filter = require("./7b").filter;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("FUNCTION:filter TESTS", () => {
  test(`Function should perform calculations exact as array.filter()`, () => {
    let greaterThanOrEqual10 = (x) => x >= 10;
    expect(filter([1, 5, 10, 15], greaterThanOrEqual10)).to.eql(
      [1, 5, 10, 15].filter(greaterThanOrEqual10)
    );
    let includes3 = (x) => x.includes("3");
    expect(
      filter(["string1", "string2", "string3", "string4"], includes3)
    ).to.eql(["string1", "string2", "string3", "string4"].filter(includes3));
  });
});
