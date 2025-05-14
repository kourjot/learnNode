function countVowelsAndConsonants(str){
  let countC=0
  let countV=0
  let vowel="aeiou"
  let consonants="bcdfghjklmnpqrstvwxyz"
  for(let i=0;i<str.length;i++){
    let ch=str[i].toLowerCase()
  
      if(vowel.includes(ch)){
        countV++
      }else if(consonants.includes(ch)){
          countC++         
      }
    
  }
  console.log(`vowels: ${countV}, consonants: ${countC}`)
  
}

countVowelsAndConsonants("Hello World!")