/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }
  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;
  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
};

const test1 = convert("PAYPALISHIRING", 3); //PAHNAPLSIIGYIR
const test2 = convert("PAYPALISHIRING", 4); //PINALSIGYAHRPI
console.log(test1);
console.log(test2);
