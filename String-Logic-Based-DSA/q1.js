function firstNonRepeatingChar(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!freq[ch]) {
      freq[ch] = 1;
    } else {
      freq[ch]++;
    }
  }


  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }

  return "1"; 
}


console.log(firstNonRepeatingChar("aabbccde")); 
console.log(firstNonRepeatingChar("aabbcc")); 
