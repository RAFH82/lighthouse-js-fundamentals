const range = (start, end, step) => {
  let outputSeq = [];
  let empty = [];
  let startNum = start;
  let endNum = end;
  if (start === undefined || end === undefined || step === undefined ) {
    return empty;
  } else if (start > end) {
    return empty;
  } else if (step <= 0) {
    return empty;
  }
  while (startNum <= endNum) {
    outputSeq.push(startNum);
    startNum += step;
  }
  return outputSeq;
}

console.log(range(0, 10, 2));
console.log(range(10,30,5));
console.log(range(-5,2,3));