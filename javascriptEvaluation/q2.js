function reverseWords(str) {
  let result = '';
  let word = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      let res = '';
      for (let j = word.length - 1; j >= 0; j--) {
        res += word[j];
      }
      result += res + ' ';
      word = ''; 
    } else {
      word += str[i]; 
    }
  }

  return result
}

const result = reverseWords("JavaScript is fun");
console.log(result);

