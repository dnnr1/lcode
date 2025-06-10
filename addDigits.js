function addDigits(num) {
  if (num < 10) return num;
  return 1 + ((num - 1) % 9);
}

const test1 = 1442;
const test2 = 3939;

console.log(addDigits(test1)); // return 2 because 1+4+4+2 = 11 = 1+1 = 2
console.log(addDigits(test2)); // return 6 because 3+9+3+9 = 24 = 2+4 = 6
