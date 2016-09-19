var should = require('chai').should(),
    formatCCNo = require('../index'),
    ccCardType = formatCCNo.ccCardType,
    formatCcCard = formatCCNo.formatCcCard;
    
describe('#ccCardType', function() {
  it('return visa card Type', function() {
    ccCardType('4111111111111111').should.equal('visa');
  });
  it('return master card Type', function() {
    ccCardType('5500000000000004').should.equal('mastercard');
  });
  it('return amex card Type', function() {
    ccCardType('3400 0000 0000 009').should.equal('amex');
  });
  it('return discover card Type', function() {
    ccCardType('6011 0000 0000 0004').should.equal('discover');
  });
  it('return unknown card Type', function() {
    ccCardType('0000 0004').should.equal('unknown');
  });
});
describe('#formatCcCard', function() {
  it('return visa card format', function() {
    formatCcCard('4111111111111111').should.equal('4111-1111-1111-1111');
  });
  it('return mastercard card format', function() {
    formatCcCard('5500000000000004').should.equal('5500-0000-0000-0004');
  });
  it('return amex card format', function() {
    formatCcCard('3400 0000 0000 009').should.equal('3400-000000-00009');
  });
  it('return discover card format', function() {
    formatCcCard('6011 0000 0000 0004').should.equal('6011-0000-0000-0004');
  });
});