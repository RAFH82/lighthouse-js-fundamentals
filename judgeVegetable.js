const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = function(vegetables, metric) {
  let ratingArray = [];
  let highestRating = null;
  for (let i = 0; i < vegetables.length; i++) {
    ratingArray.push(vegetables[i][metric]);
  }
  highestRating = ratingArray.indexOf(Math.max(...ratingArray));
  return vegetables[highestRating].submitter;
}

judgeVegetable(vegetables, metric)