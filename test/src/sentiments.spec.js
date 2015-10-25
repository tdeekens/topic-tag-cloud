import { colorFor } from '../../src/sentiments';
import chai from 'chai';

chai.should();

var
  scores = {
    high: 'green',
    medium: 'grey',
    low: 'red',
  };

describe('sentiments', () => {
  describe('colorFor', () => {
    it(`should give a color-code ${scores.high} for scores > 60`, () => {
      colorFor(60).should.not.be.equal(scores.high);
      colorFor(60.5).should.be.equal(scores.high);
      colorFor(61).should.be.equal(scores.high);
      colorFor(66).should.be.equal(scores.high);
    });

    it(`should give a color-code ${scores.medium} for scores between 40 and 60`, () => {
      colorFor(40.5).should.be.equal(scores.medium);
      colorFor(41).should.be.equal(scores.medium);
      colorFor(59).should.be.equal(scores.medium);
      colorFor(-10).should.not.be.equal(scores.medium);
    });

    it(`should give a color-code ${scores.low} for scores < 40`, () => {
      colorFor(40.5).should.not.be.equal(scores.low);
      colorFor(39).should.be.equal(scores.low);
      colorFor(20).should.be.equal(scores.low);
      colorFor(-10).should.be.equal(scores.low);
    });
  });
});
