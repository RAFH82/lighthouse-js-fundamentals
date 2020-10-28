const talkingCalendar = date => {
  let selectorMonth = date[5] + date[6];
  let month = '';
  let day = parseInt(date[8] + date[9]);
  let grammer = '';
  if (date[8] === '0') {
    day = parseInt(date[9]);
  }
  if (day > 3 && day < 21) {
    grammer = 'th';
  } else {
    switch (day % 10) {
      case 1: 
        grammer = 'st';
        break;
      case 2:
        grammer = 'nd';
        break;
      case 3: 
        grammer = 'rd';
        break;
      default:
        grammer = 'th';
    }
  }
  let year = '';
  for (let i = 0; i < 4; i++) {
    year += date[i];
  }
  switch (selectorMonth) {
    case '01': 
      month = 'January';
      break;
    case '02': 
      month = 'February';
      break;
    case '03': 
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05': 
      month = 'May';
      break;
    case '06': 
      month = 'June';
      break;
    case '07': 
      month = 'July';
      break;
    case '08': 
      month = 'August';
      break;
    case '09': 
      month = 'September';
      break;
    case '10': 
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12': 
      month = 'December';
      break;
    default: 
      month = 'Error';
  }
  return `${month} ${day}${grammer}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));