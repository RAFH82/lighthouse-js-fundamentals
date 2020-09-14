const array = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const velocity = 38

const carPassing = (cars, speed) => {
  cars.push({time: Date.now(), speed: speed});
  return cars;
}

console.log(carPassing(array, velocity));