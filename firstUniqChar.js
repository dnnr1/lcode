function firstUniqChar(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] !== undefined) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("leetcode")); // output: 0
console.log(firstUniqChar("loveleetcode")); // output: 2
console.log(firstUniqChar("aabb")); // output: -1
