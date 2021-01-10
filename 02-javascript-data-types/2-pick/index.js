/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const finalObj = {};
  for (const key in obj) {
    if (fields.includes(key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

// const fruits = {
//   apple: 2,
//   orange: 4,
//   banana: 3
// };
//
// console.log(pick(fruits, 'banana', 'orange')); // { apple: 2, banana: 3 }
