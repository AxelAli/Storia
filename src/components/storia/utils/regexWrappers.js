/**
 * @param  {string} txt
 * Text to match
 * @param  {regex} regex
 * Regex to match
 * @return  {bool}
 * Returns true if regex is matched, otherwise False
 */
export const match = (txt, regex) => !!txt.match(regex);
/**
 * @param  {string} txt
 * Text to match
 * @param  {regex} regex
 * Regex to match
 * @param  {number} index
 * Index to return , 0 by default
 * @return  {string}
 * Returns extracted text from index, otherwise null
 */
export const extract = (txt, regex, index = 0) =>
  txt.match(regex)[index] || null;
