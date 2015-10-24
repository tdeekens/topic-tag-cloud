import { min, max } from '../../src/utils';
import chai from 'chai';

chai.should();

describe('utils', () => {
  describe('min', () => {
    it('should calculate the minimum from a list without dupes', () => {
      min([1, 2, 3]).should.be.equal(1);
      min([1, 5, 0]).should.be.equal(0);
      min([1, 5, -3]).should.be.equal(-3);
    });

    it('should calculate the minimum from a list with', () => {
      min([1, 2, 3, 3, 1]).should.be.equal(1);
      min([1, 5, 0, 0]).should.be.equal(0);
    });

    it('should return `undefined` for empty arrays', () => {
      (min([]) === undefined).should.be.true;
    });
  });

  describe('max', () => {
    it('should calculate the maximum from a list without dupes', () => {
      max([1, 2, 3]).should.be.equal(3);
      max([1, 5, 0]).should.be.equal(5);
      max([1, 5, -3]).should.be.equal(5);
    });

    it('should calculate the minimum from a list with', () => {
      max([1, 2, 3, 3, 1]).should.be.equal(3);
      max([1, 5, 0, 0]).should.be.equal(5);
    });

    it('should return `undefined` for empty arrays', () => {
      (max([]) === undefined).should.be.true;
    });
  });
});
