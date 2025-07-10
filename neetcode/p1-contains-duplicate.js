function hasDuplicate(nums) {
  const numsSet = new Set();

  for (const item of nums) {
    if (numsSet.has(item)) {
      return true;
    }
    numsSet.add(item);
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));
