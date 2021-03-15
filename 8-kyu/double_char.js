/* 
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
  let arr = []
  for(let i=0; i<str.length; i++){
    arr.push(str[i])
    arr.push(str[i])
  }
  return arr.join('')
}
