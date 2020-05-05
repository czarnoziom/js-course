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
  test('Returned object property name should be a string', () => {
    expect(typeof generateHuman().name).to.equal('string');
  });
  test('Returned object property surname should be a string', () => {
    expect(typeof generateHuman().surname).to.equal('string');
  });
  test('Returned object property mail should be a string', () => {
    expect(typeof generateHuman().mail).to.equal('string');
  });
  test('Returned object property age should be a number', () => {
    expect(typeof generateHuman().age).to.equal('number');
  });
  test('Returned object property mail should be a proper mail', () => {
    expect(is.email(generateHuman().mail)).to.equal(true);
  });
  test('Returned object property age should number from 18 to 85', () => {
    expect(generateHuman().age).to.be.within(0, 85);
  });
  test('Returned object property age should number from 18 to 85', () => {
    expect(generateHuman().country).to.be.oneOf(['PL', 'UK', 'USA']);
  });
});
