const camelCase = input => {
  let string = input;
  let result = '';
  for (let i=0; i<input.length; i++) {
    if (string[i] == ' ') {
      result += '' + string[i+1].toUpperCase();
      i++;
    }
    else {
      result += string[i];
    } 
  }
  console.log(result);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));