/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {

  let newObj = {};

  if (obj === undefined) {
    return undefined;
  }

  if (obj !== null) {
    for (let key in obj) {
      newObj[obj[key]] = key;
    }
    return newObj;
  }

}

