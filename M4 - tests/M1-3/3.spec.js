const array1 = require('./3').array1;

const chai = require('chai'),
  expect = chai.expect;
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('ARRAY:array1 TESTS', () => {
  test('array1 should be an array', () => {
    expect(array1).to.be.array();
  });
  test('array1 should have lenght 10', () => {
    expect(array1).to.be.ofSize(10);
  });
  test('all elements in array1 should be numbers', () => {
      for(i in array1) expect(typeof(array1[i])).to.equal('number');
  });
  test('all elements in array1 should be numbers from 0 to 99', () => {
      for(i in array1) expect(array1[i]).to.be.within(0, 99);
  });
  test('all elements in array1 should be integer', () => {
    for (i in array1) expect(Number.isInteger(array1[i])).to.be.true;
  });
});