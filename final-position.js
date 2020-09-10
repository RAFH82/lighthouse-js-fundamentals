const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = moves => {
  let results = [0,0];
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i ++) {
    if (moves[i] === 'west') {
      x += -1;
    } else if (moves[i] === 'east') {
      x += 1;
    } else if (moves[i] === 'north') {
      y += 1;
    } else if (moves[i] === 'south') {
      y += -1;
    }
  }
  results[0] = x;
  results[1] = y;
  return results; 
};

console.log(finalPosition(moves));