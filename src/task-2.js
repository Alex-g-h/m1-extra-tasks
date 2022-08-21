console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

/**
 * Compare sybmols of input string for equity
 * @param {*} str1 String one
 * @param {*} str2 String two
 * @returns True is symbols in string equal, false otherwise
 */
function isEqualSymbols(str1, str2) {
  let res = true;

  const symbolsObject = {};

  // collect all unique symbols from first string
  for (symbol of str1)
    symbolsObject[symbol] = '';
  
  // check symbols from second string for existence
  for (symbol of str2) {
    res &&= (symbolsObject[symbol] !== undefined);
    if (!res)
      break;
  }

  return res;
}