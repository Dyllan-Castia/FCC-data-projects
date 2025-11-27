//This function reverses the characters of a given string.

function reverseString(str) {
  const broken = str.split("");
  const reversed = broken.reverse()
  const newString = reversed.join("");
  return newString;
}
console.log(reverseString("Dogs"));
//sgoD
