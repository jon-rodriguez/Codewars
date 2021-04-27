/*
8kyu - Sort and Star

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  return s.sort().shift().split('').map(a => a + '***').join('').slice(0, -3)
}
