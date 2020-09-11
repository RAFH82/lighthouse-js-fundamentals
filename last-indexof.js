let array = [3,4,52,2,56,2,2,1,3];
let test  = [];

const lastIndexOf = (array, value) => {
  let index = '';
  if (value === undefined || array.length === 0) {
    return -1;
  } else if (typeof value !== 'number') {
    return "Please enter a number";
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
    }
  }
  if (index === '') {
    return -1;
  }
  return index;
}

console.log(lastIndexOf(array,3));
