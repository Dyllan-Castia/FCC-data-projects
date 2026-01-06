/*Finds a word within a string and replaces that word with another specified word. If the word to be replaced begins in a capital letter the word that replaces it will
also be capitalized. If not than the word to be replaced will be de-capitalized for lack of a better term. ¯\_(ツ)_/¯
*/
function myReplace(str, wrd, rpl) {
  const regex = new RegExp(wrd);
  const parsed = str.match(regex);

  if (parsed[0][0] === parsed[0][0].toUpperCase()) {
    return str.replace(parsed[0], rpl[0].toUpperCase() + rpl.slice(1));
  } else {
    return str.replace(parsed[0], rpl[0].toLowerCase() + rpl.slice(1));
  }
}

console.log(myReplace("This is Sparta", "Sparta", "mexico"));
//This is Mexico
