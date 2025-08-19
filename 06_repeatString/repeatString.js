const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let receivedString = "";
  for (let i = 0; i < num; i++) {
    receivedString = receivedString + string;
  }
  return receivedString;
};

// Do not edit below this line
module.exports = repeatString;
