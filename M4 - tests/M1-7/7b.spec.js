const filter = require('./7b').filter;

const chai = require('chai'),
  expect = chai.expect;
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('FUNCTION:filter TESTS', () => {
  test(`Function should filter numbers correctly`, () => {
    let greaterThanOrEqual10 = (x) => x >= 10;
    expect(filter([1, 5, 10, 15], greaterThanOrEqual10)).to.eql([10,15]);
  });
  test(`Function should filter strings correctly`, () => {
    let greaterThanOrEqual10 = (x) => x.includes('3');
    expect(filter(['string1','string2','string3','string4'], greaterThanOrEqual10)).to.eql(['string3']);
  });
});
