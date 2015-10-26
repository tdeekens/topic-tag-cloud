import { min, max, ceil } from 'utils';

/**
 * Calculates a set of ranges for a given list of bars.
 * Example:
 *   An input for bars [1, 3, 3, 5, 6, 7] and 2 demanded groups
 *   would ouput an array with 3 ranges being [{
 *     min: 1, max: 4,
 *     min: 4: max: 7
 *   }]
 *
 * Note:
 *   All numbers within the ranges are to be ceiled/rounded to their
 *   next biggest integer.
 *
 * @param {Array} bars an array of bars.
 * @param {Number} groups the number of groups the bars will be sorted into.
 * @return {Array} An array of objects each being a range with a min and max value.
 */
export default function ranges(bars, groups) {
  // The width of a bar depends on the max minus the min bar overall
  const
    minBar = min(bars),
    maxBar = max(bars),
    width = ( maxBar - minBar ) / groups;
  // Intializes return and loop values
  let
    ranges = [],
    start = minBar;

  for(let i = 0; i < groups; i++) {
    // Ceils each number
    ranges.push({
      min: ceil(start),
      max: start = ceil(( start + width ))
    });
  }

  return ranges;
}

/**
 * Determines in which range a certain volume lives.
 * Example:
 *  An input of ranges being [{
 *     min: 1, max: 4,
 *     min: 4: max: 7
 *  }]
 *  and a volume of 4 would return the index 0.
 *
 * @param {Array} ranges calculated previously.
 * @param {Number} volume which should be in a range.
 * @return {Number|undefined} Index of range matching to volume or undefined without a match.
 */
export function within(ranges, volume) {
  // Helper fn taking an x and
  // checking if it's in a given range
  // of min and max.
  const
    between = function(x, min, max) {
      return x >= min && x <= max;
    };
  let
    index = 0,
    matched;

  // Optimized for of loop for early exit
  for (let i = 0, len = ranges.length; i < len; i++) {
    let
      range = ranges[i];

    if (between(volume, range.min, range.max)) {
      matched = index;

      break;
    }

    ++index;
  }

  return matched;
};
