/*
All Star Code Challenge #18


This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0
*/

function strCount(str, letter){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
  }
  return count;
}


//another solution
function strCount(str, letter){
  return str.split('').filter((x) => letter === x).length;
}
