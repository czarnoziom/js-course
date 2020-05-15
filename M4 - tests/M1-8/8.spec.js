const generateHuman = require('./8').generateHuman;

const chai = require('chai'),
  expect = chai.expect;
const is = require('is_js');

describe('FUNCTION:generateHuman TESTS', () => {
  test('Function should return object', () => {
    expect(generateHuman()).to.be.an('object');
  });
  test('Returned object should have properties name, surname, mail, country, age', () => {
    expect(generateHuman()).to.have.all.keys('name','surname','mail','country','age');
  });
  test('Returned object should have a proper type structure', () => {
    expect(typeof generateHuman().name).to.equal('string');
    expect(typeof generateHuman().surname).to.equal('string');
    expect(typeof generateHuman().mail).to.equal('string');
    expect(typeof generateHuman().age).to.equal('number');
    expect(is.email(generateHuman().mail)).to.equal(true);
    expect(generateHuman().age).to.be.within(0, 85);
    expect(generateHuman().country).to.be.oneOf(['PL', 'UK', 'USA']);
  });
});
