const garbage = {
  waste: null,
  recycling: null,
  compost: null
};


const smartGarbage = (trash, bins) => {
  if (trash === 'waste') {
    bins[trash] += 1;
  } else if (trash === 'recycling') {
    bins[trash] += 1;
  } else {
    bins[trash] += 1;
  }
  return bins; 
}

console.log(smartGarbage('waste', garbage));
console.log(smartGarbage('waste', garbage));
console.log(smartGarbage('compost', garbage));



