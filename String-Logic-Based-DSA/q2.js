function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    let sorted = word.split("").sort().join("");  
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(word);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
