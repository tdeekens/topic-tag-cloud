/**
 * Determines a color identifer for a given sentiment value.
 *
 * @param {Number} A sentiment score
 * @return {String} A color-code/name for the given sentiment
 */
export function colorFor(sentiment) {
  if (sentiment > 60) { return 'green'; }
  else if (sentiment < 40) { return 'red'; }
  else { return 'grey'; }
};
