function sumDig(num) {
  if (num < 10) return num;
  let newNum = 0;
  while (num) {
    newNum += num % 10;
    num = Math.floor(num / 10);
  }
  return sumDig(newNum);
}

const test1 = 1442;
const test2 = 3939;

console.log(sumDig(test1)); // return 2 because 1+4+4+2 = 11 = 1+1 = 2
console.log(sumDig(test2)); // return 6 because 3+9+3+9 = 24 = 2+4 = 6
