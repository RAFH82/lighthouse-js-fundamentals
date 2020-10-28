const test = [5,9,30,20,99];

  const sumLargestNumbers = (array) => {
   for (i = 0; i < array.length; i++) {
     for (j = 0; j < array.length - i; j++) {
      if (array[j] < array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array[0] + array[1];
}

console.log(sumLargestNumbers(test));