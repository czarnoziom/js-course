const colors = require("./5").colors;
const checkArray = require("./5").checkArray;

const chai = require("chai"),
  expect = chai.expect;
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("ARRAY:colors TESTS", () => {
  test("Array should have lenght 15", () => {
    expect(colors).to.be.ofSize(15);
  });
  test("All array elements should be numbers", () => {
    for (i in colors) expect(typeof colors[i]).to.equal("string");
  });
});
describe("FUNCTION:checkArray TESTS", () => {
  test("When input array doesn't contain input phrase, function should return correct alert", () => {
    expect(checkArray(colors, "aquamarine")).to.equal(
      "The array does not contain the element: aquamarine"
    );
  });
  test("When input phrase is undefined, function should return correct alert", () => {
    expect(checkArray(colors)).to.equal(
      "You haven't completed the phrase to check"
    );
  });
  test("Function should return correct alert with correct index", () => {
    expect(checkArray(colors, "yellow")).to.equal(
      "The array contains an element: yellow, the index of an element is: 5"
    );
  });
  test("The function should return a correct alert with the correct index regardless of the upper or lower case letters used in the input", () => {
    expect(checkArray(colors, "HiTe")).to.equal(
      "The array contains an element: HiTe, the index of an element is: 2"
    );
  });
});
