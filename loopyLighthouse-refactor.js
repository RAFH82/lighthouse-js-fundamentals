let range = [10,20];
let multiples = [2,5];
let words = ["Batty", "Beacon"];

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    let mult1 = i % multiples[0];
    let mult2 = i % multiples[1];
    if (mult1 === 0 && mult2 === 0) {
      console.log(words[0] + words[1]);
    } else if (mult1 === 0) {
      console.log(words[0]);
    } else if (mult2 === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]);
