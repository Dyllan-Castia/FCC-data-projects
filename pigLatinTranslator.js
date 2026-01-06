function translatePigLatin(str) {
  
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }

  const consonantCluster = str.match(/^[^aeiou]+/i);

  if (!consonantCluster) {
    return str + "ay";
  }

  const cluster = consonantCluster[0];

  if (cluster.length === str.length) {
    return str + "ay";
  }

  return str.slice(cluster.length) + cluster + "ay";
}
