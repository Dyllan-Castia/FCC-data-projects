function translatePigLatin(str) {
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }
  const vowelIndex = str.search(/[aeiou]/i);

  if (vowelIndex === -1) {
    return str + "ay";
}
}
