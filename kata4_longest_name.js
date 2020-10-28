

const instructorWithLongestName = instructors => {
  let nameLength = [];
  let indexOfName = null;
  for (let i=0; i<instructors.length; i++) {
    nameLength[i] = instructors[i].name.length;
  }
  indexOfName = nameLength.indexOf(Math.max(...nameLength));
  return instructors[indexOfName];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

