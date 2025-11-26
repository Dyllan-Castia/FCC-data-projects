console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));
//Apples

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));
//Apples, Grapes

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));
//Vegetable Oil, Apples, Grapes

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));
//Vegetable Oil, Apples, Grapes, Popcorn, Beef Jerky Potato Chips

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));
//Vegetable Oil, Apples, Grapes, Popcorn, Beef Jerky

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));
//Chocolate Cake, Vegetable Oil, Apples, Grapes, Popcorn, Beef Jerky

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";
//Canola Oil, Apples, Grapes, Popcorn, Beef Jerky
