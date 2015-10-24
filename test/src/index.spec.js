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
    it('should should be true', () => {
      index().should.be.true;
    });
  });
});
