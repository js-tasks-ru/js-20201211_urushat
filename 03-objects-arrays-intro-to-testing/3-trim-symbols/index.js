/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let trimArray = string.split("");
  let helpArray = [trimArray[0]];
  let counter = 1;
  if (size > 0) {
    for (let i = 1; i < trimArray.length; i++) {
      if (trimArray[i] === trimArray[i - 1]) {
        counter = counter + 1;
      } else {
        counter = 1;
      }
      if (counter <= size) {
        helpArray.push(trimArray[i]);
      }
    }
    return helpArray.join('');
  } else if (size == 0) {
    return '';
  } else if (size == undefined) {
    return string;
  }

}
