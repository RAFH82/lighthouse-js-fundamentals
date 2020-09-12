let test1 = [1,2,3];
let test2 = [4,5,6];

const concat = (array1, array2) => {
  let array3 = [];
  for (let element of array1) {
    array3.push(element);
  }
  for (let element of array2) {
    array3.push(element);
  }
  return array3;
}

console.log(concat(test1,test2));