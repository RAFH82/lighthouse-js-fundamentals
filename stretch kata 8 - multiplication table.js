const multiplicationTable = value => {
  let table = '';
  for (let i = 1; i <= value; i++) {
    for (let j = 1; j <= value; j++) {
      table += `${i*j} `;
    }
    if (j = value) {
      table += "\n";
    }
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

