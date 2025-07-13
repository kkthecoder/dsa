/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let res = "";
  for (let s of strs) {
    res += s.length + "#" + s;
  }
  return res;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  const res = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const len = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + len;
    res.push(str.substring(i, j));
    i = j;
  }
  return res;
}

const input = ["neet", "code", "love", "you"];
console.log(decode(encode(input)));
