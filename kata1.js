const test = [5,9,30,20,99];

  const sumLargestNumbers = (array) => {
    let index = '';
    let highestNum = '';
    let nextHighestNum = '';
  index = array.indexOf(Math.max(...array))
  highestNum = array[index];
  array.splice(index,1);
  index = array.indexOf(Math.max(...array));
  nextHighestNum = array[index];
  return highestNum + nextHighestNum;
}

console.log(sumLargestNumbers(test));

