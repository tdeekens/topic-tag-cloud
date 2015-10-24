/**
 * Calculates the minimum value of an arrary.
 *
 * @param {Array} An array of numbers
 * @return {number|undefined} The minimum number within the array or undefined for empty arrays.
 */
export function min(values) {
  if (values.length === 0) { return undefined; }

  return values.reduce((smallest, candidate) => {
    return ( smallest < candidate ? smallest : candidate );
  });
};

/**
 * Calculates the maximum value of an arrary.
 *
 * @param {Array} An array of numbers
 * @return {number|undefined} The maximum number within the array or undefined for empty arrays.
 */
export function max(values) {
  if (values.length === 0) { return undefined; }

  return values.reduce((biggest, candidate) => {
    return ( biggest > candidate ? biggest : candidate );
  });
};
