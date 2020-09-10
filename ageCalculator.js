const ageCalculator = (name, yearOfBirth, currentYear) => {
  if (typeof name != 'string') {
    console.log("Please enter a valid name");
  }
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}

console.log(ageCalculator('Ryan', 1982, 2020));