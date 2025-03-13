function validParentheses(s) {
  const stack = [];
  const legend = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (legend[char]) {
      stack.push(char);
    } else if (legend[stack.pop()] !== char) {
      return false;
    }
  }
  return !stack.length;
}

const test1 = validParentheses("()"); // true
const test2 = validParentheses("()[]{}"); // true
const test3 = validParentheses("(]"); // false

console.log(test1, test2, test3);
