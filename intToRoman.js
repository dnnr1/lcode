/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";

  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let i in map) {
    while (num >= map[i]) {
      result += i;
      num -= map[i];
    }
  }

  return result;
};

console.log(intToRoman(3749)); //MMMDCCXLIX
console.log(intToRoman(58)); //LVIII
