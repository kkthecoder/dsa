/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNumeric(s[l])) {
      l++;
    }
    while (r > l && !isAlphaNumeric(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function isAlphaNumeric(c) {
  return (
    (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
  );
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
