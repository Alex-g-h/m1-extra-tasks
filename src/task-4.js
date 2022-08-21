isPalindrome("racecar"); // true
isPalindrome("programmer"); // false
isPalindrome("toolkit"); // false


/**
 * Analyze string to palindrome feature
 * @param {*} string String to test
 * @returns True if string is palindrome, false otherwise
 */
function isPalindrome(string) {
  let res = true;

  const array = string.split('');

  res &&= (array.length % 2 == 1);
  const centerCharIndex = Math.floor(array.length / 2);
  let i = 0;
  while (res && i < centerCharIndex) {
    res &&= (array.at(i) === array.at(-i - 1));
    i++;
  }

  console.log(res);
  return res;
}

