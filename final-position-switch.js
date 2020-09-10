const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = moves => {
  let results = [0,0];
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i ++) {
    switch (moves[i]) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y += -1;
      break;
    case 'west':
      x += -1;
      break;
    case 'east':
      x += 1;
      break;
    }
  }
  results[0] = x;
  results[1] = y;
  return results; 
};

console.log(finalPosition(moves));