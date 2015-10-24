import index from '../../src/index';
import chai from 'chai';

chai.should();

var
  expect;

describe('Index', () => {
  before(() => {
    expect = chai.expect;
  });

  describe('default', () => {
    it('should have a function to inject by src or text', () => {
      index().should.be.true;
    });
  });
});
