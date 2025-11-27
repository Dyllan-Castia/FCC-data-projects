///Empty variable: lunches, is defined by an array that accepts or removes items using one of several functions below. If the array remains empty the functions will return
//their own strings. If the array has any items in it, the functions will return their unique strings followed by the array's updated value.
const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr) {
  const removedLunch = arr[arr.length - 1];
  if (arr.length >= 1) {
    arr.pop();
    console.log(removedLunch + " removed from the end of the lunch menu.");
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

function removeFirstLunch(arr) {
  const removedLunch = arr[0];
  if (arr.length >= 1) {
    arr.shift();
    console.log(removedLunch + " removed from the start of the lunch menu.");
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

function getRandomLunch(arr) {
  if (arr.length >= 1) {
    const rando = Math.floor(Math.random() * arr.length);
    console.log("Randomly selected lunch: " + arr[rando]);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + arr.join(", "));
  }
}
