const checkTriangle = require("./2").checkTriangle;

const chai = require("chai"),
  expect = chai.expect;

describe("FUNCTION: checkTriangle TESTS", () => {
  test('Function should only take numbers as arguments',()=>{
    expect(checkTriangle('string',4,5)).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
    expect(checkTriangle(3,true,5)).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
    expect(checkTriangle(3,4,[5])).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
  test('Function should correctly determine if the triangle is rectangular',()=>{
    expect(checkTriangle(3,4,5)).to.equal(`You can build rectangular triangle from given edges`);
    expect(checkTriangle(10,6,8)).to.equal(`You can build rectangular triangle from given edges`);
    expect(checkTriangle(12,15,9)).to.equal(`You can build rectangular triangle from given edges`);

    expect(checkTriangle(13,1,90)).to.equal(`You can't build rectangular triangle from given edges`);
    expect(checkTriangle(1,2.23,9)).to.equal(`You can't build rectangular triangle from given edges`);
    expect(checkTriangle(3,4,6)).to.equal(`You can't build rectangular triangle from given edges`);
  });
  test('Function should return alert if arguments are undefined',()=>{
    expect(checkTriangle()).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
});
