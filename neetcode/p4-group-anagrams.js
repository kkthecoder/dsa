/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const res = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(str);
    console.log(res);
  }
  return Object.values(res);
}

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
