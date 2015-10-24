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
 * . next biggest integer.
 *
 * @param {Array} bars an array of bars.
 * @param {Number} groups the number of groups the bars will be sorted into.
 * @return {Array} An array of objects each being a range with a min and max value.
 */
function ranges(bars, groups) {
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
};

export default ranges;
