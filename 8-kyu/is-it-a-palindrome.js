/*
8kyu - Is it a palindrome?

Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
*/

function isPalindrome(x) {
  // your code here
  let arr = x.split('').reverse().join('').toLowerCase()
  if(x.toLowerCase() === arr){
    return true
  }else{
    return false
  }
}
