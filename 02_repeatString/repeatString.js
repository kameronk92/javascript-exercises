const { TiMessage } = require("react-icons/ti");

const repeatString = function(word, n) {
  if (n < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < n; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
