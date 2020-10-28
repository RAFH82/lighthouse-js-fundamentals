 const repeatNumbers = data => {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    let numOfRepeats = data[i][1].toString();
    let numToRepeat = data[i][0].toString();
    if (data.length > 1 && (i+1) == (data.length)) {
      result += `${numToRepeat.repeat(numOfRepeats)}`;
    } else if (data.length > 1) {
      result += `${numToRepeat.repeat(numOfRepeats)}, `;
    } else {
      result += `${numToRepeat.repeat(numOfRepeats)}`;
    }
  }
  return result;
}; 

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


