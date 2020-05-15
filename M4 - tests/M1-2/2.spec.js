const checkTriangle = require("./2").checkTriangle;

const chai = require("chai"),
  expect = chai.expect;

describe("FUNCTION: checkTriangle TESTS", () => {
  test('When other type of argument than number is entered, function works correctly when returns alert:',()=>{
    expect(checkTriangle('string',4,5)).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
  test('When other type of argument than number is entered, function works correctly when returns alert:',()=>{
    expect(checkTriangle(3,true,5)).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
  test('When other type of argument than number is entered, function works correctly when returns alert:',()=>{
    expect(checkTriangle(3,4,[5])).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
  test('When triangle can be built from given arguments, function works correctly when returns alert:',()=>{
    expect(checkTriangle(3,4,5)).to.equal(`You can build rectangular triangle from given edges`);
  });
  test('When triangle can be built from given arguments, function works correctly when returns alert:',()=>{
    expect(checkTriangle(10,6,8)).to.equal(`You can build rectangular triangle from given edges`);
  });
  test('When triangle can be built from given arguments, function works correctly when returns alert:',()=>{
    expect(checkTriangle(12,15,9)).to.equal(`You can build rectangular triangle from given edges`);
  });
  test(`When triangle can't be built from given arguments, function works correctly when returns alert:`,()=>{
    expect(checkTriangle(13,1,90)).to.equal(`You can't build rectangular triangle from given edges`);
  });
  test(`When triangle can't be built from given arguments, function works correctly when returns alert:`,()=>{
    expect(checkTriangle(1,2.23,9)).to.equal(`You can't build rectangular triangle from given edges`);
  });
  test(`When triangle can't be built from given arguments, function works correctly when returns alert:`,()=>{
    expect(checkTriangle(3,4,6)).to.equal(`You can't build rectangular triangle from given edges`);
  });
  test('If arguments are undefined, function works correctly when returns alert:',()=>{
    expect(checkTriangle()).to.equal(`You have to enter 3 numbers to check if the triangle is rectangular`);
  });
});