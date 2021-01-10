/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let omitFinalObj = {};
  for (let key in obj) {
    if (!fields.includes(key)) {
        omitFinalObj[key] = obj[key];
    }

  }
  return omitFinalObj;
};

// const fruits = {
//   apple: 2,
//   orange: 4,
//   banana: 3
// };
//
// console.log(omit(fruits, 'apple', 'banana')); // Вернет обїект - { orange: 4 }
