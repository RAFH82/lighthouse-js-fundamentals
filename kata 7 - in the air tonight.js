const checkAir = (samples, threshold) => {
  let cleanAirTotal = 0;
  let dirtyAirTotal = 0;
  let airQualityVerdict = 0;
  for (airQuality of samples) {
    if (airQuality === 'clean') {
      cleanAirTotal++;
    } else if (airQuality === 'dirty') {
        dirtyAirTotal++;
    }
  }
  airQualityVerdict = (dirtyAirTotal / (dirtyAirTotal + cleanAirTotal));
  if (airQualityVerdict > threshold) {
    return 'Polluted';
  } return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
