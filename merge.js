let test1 = [8,1,4];
let test2 = [6,9,7];

const merge = (array1, array2) => {
  let array3 = [];
  for (let element of array1) {
    array3.push(element);
  }
  for (let element of array2) {
    array3.push(element);
  }
  array3.sort((a, b) => a - b);
  return array3;
}

console.log(merge(test1,test2));