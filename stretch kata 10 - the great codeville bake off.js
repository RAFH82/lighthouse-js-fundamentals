const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let resultsA = [];
  let resultsB = [];
  let availableRecipes = '';
  for (let i = 0; i < recipes.length; i++) {
    // iterate through all the recipe's ingredients arrays and compare to each bakery's array of ingredients, and push any matches to a new array representing each bakery for later comparison
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (ingredient of bakeryA) {
        if (ingredient === recipes[i].ingredients[j]) {
          resultsA.push(recipes[i].name);
        }
      }
      for (ingredient of bakeryB) {
        if (ingredient === recipes[i].ingredients[j]) {
          resultsB.push(recipes[i].name);
        }
      }
    }
  }
  // compare each element in one array to the other and push to a final array of results
  resultsA.forEach((element1) => resultsB.forEach((element2) => {
    if (element1 === element2){
      availableRecipes += element1 + "\n";
    }
  }
  ));
  // return matching recipes
  return availableRecipes;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
// expected output: Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
// expected output: Nima's Famous Dijon Raisins
// Other version of this code :
// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//   for (let recipe of recipes) {
//     let countA = 0;
//     let countB = 0;
//     for (let ingredient of recipe.ingredients) {
//       if (bakeryA.includes(ingredient)) countA += 1;
//       if (bakeryB.includes(ingredient)) countB += 1;
//     }
//     if (countA !== 0 && countB !== 0) {
//       return recipe.name;
//     }
//   }
//   return 'No matches found';
// };