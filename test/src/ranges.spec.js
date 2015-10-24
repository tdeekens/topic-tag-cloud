import ranges from '../../src/ranges';
import chai from 'chai';

chai.should();

describe('ranges', () => {
  describe('default', () => {
    it('should calculate a set of ranges of demanded length', () => {
      const twoRanges = ranges([
        1, 3, 3, 5, 6, 7
      ], 2);

      twoRanges.should.have.length(2);
    });

    it('should calculate a set of ranges each having a correct width', () => {
      const twoRanges = ranges([
        1, 3, 3, 5, 6, 7
      ], 2);

      twoRanges[0].min.should.be.equal(1);
      twoRanges[0].max.should.be.equal(4);

      twoRanges[1].min.should.be.equal(4);
      twoRanges[1].max.should.be.equal(7);
    });

    it('should deal with bigger ranges than necessary', () => {
      const sevenRanges = ranges([
        1, 3, 3, 5, 6, 7
      ], 7);

      sevenRanges.should.have.length(7);
      sevenRanges[0].min.should.be.equal(1);
      sevenRanges[0].max.should.be.equal(2);
    });
  });
});
