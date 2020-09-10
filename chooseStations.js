const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = validStations => {
  let results = [];
  for (const station of validStations) {
    if (station[1] >= 20) {
      if (station[2] === 'school' || station[2] === 'community centre') {
        results.push(station[0]);
      } 
    }
  }
  return results;
}


console.log(chooseStations(stations));