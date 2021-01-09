/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let arrayFromPath = path.split('.');

  return (inputObject) => {
    let result = inputObject;

    for (let i of arrayFromPath) {
      if (result === undefined) {
        break;
      }
      result = result[i];
    }
    return result;
  };
}

