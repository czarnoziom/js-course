const map = require('./7a').map;

const chai = require('chai'),
  expect = chai.expect;
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('FUNCTION:map TESTS', () => {
  test(`Function should perform calculations correctly`, () => {
    let add10 = (x) => x + 10;
    expect(map([1, 5, 10, 15], add10)).to.eql([11, 15, 20, 25]);
    let multiply5 = (x) => x * 5;
    expect(map([1, 5, 10, 15], multiply5)).to.eql([5, 25, 50, 75]);
    let sqrt = (x) => Math.sqrt(x);
    expect(map([4,9,16,25], sqrt)).to.eql([2,3,4,5]);
  });
  test(`Function should perform operations on strings correctly`, () => {
    let makeUpperCase = (x) => x.toUpperCase();
    expect(map(['hello', 'WORLD', 'HeLlo', 'wORld'], makeUpperCase)).to.eql(['HELLO', 'WORLD', 'HELLO', 'WORLD']);
  });
});
