module.exports = function check(str, bracketsConfig) {
  const brackets = [];

  if (str.length % 2 > 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1] && brackets[brackets.length - 1] === bracketsConfig[j][0]) brackets.pop();
      else if (str[i] === bracketsConfig[j][0]) brackets.push(str[i]);      
    }
  }

  if (brackets.length === 0) return true;
  else return false;
}
