/*
8kyu Vowel remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
*/

function shortcut(string){
  let arr = string.split('')
  let arr1 = ['a', 'e', 'i', 'o', 'u']
  return arr.filter(x => !arr1.includes(x)).join('')
}
