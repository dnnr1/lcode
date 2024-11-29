/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] !== undefined) {
      map[magazine[i]] += 1;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]] || map[ransomNote[i]] === 0) {
      return false;
    }
    map[ransomNote[i]] -= 1;
  }
  return true;
};

const test1 = { ransomNote: "a", magazine: "b" }; //     output: false
const test2 = { ransomNote: "aa", magazine: "ab" }; //   output: false
const test3 = { ransomNote: "aa", magazine: "aab" }; //  output: true

console.log(canConstruct(test1.ransomNote, test1.magazine));
console.log(canConstruct(test2.ransomNote, test2.magazine));
console.log(canConstruct(test3.ransomNote, test3.magazine));
