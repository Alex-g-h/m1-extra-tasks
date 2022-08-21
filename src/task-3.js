const TEST_ARRAY = [1, 1, 2, 2, 4, 2, 3, 7, 3];

const result = unique(TEST_ARRAY);
console.log(result);


/**
 * Find unique number in input array
 * @param {*} array Input array of integer numbers
 * @returns Array of unique number from input array
 */
function unique(array) {
  let resArray = [];
  let res = {};

  if (!Array.isArray(array)) {
    console.error('Input argument is not an array.');
    return resArray;
  }

  array.forEach(number => res[number] = '');
  resArray = Object.keys(res).map(key => Number(key));

  return resArray;
}