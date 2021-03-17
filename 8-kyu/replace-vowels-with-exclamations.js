/*
8kyu - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');


//another solution...
function replace(s){
  //coding and coding....
  let arr = s.split('')
  let arr1= []
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U'){
    arr1.push('!')
  }else{
      arr1.push(arr[i])
    }
}
  return arr1.join('')
}
