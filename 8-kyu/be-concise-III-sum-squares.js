/*
8kyu - Be Concise III - Sum Squares

Be Concise III - Sum Squares
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

A few hints:

Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!
*/

let sumSquares = a => a.reduce((s, x) => s + x * x, 0)


//another solution
function sumSquares(array) {
  return array.map((num) => Math.pow(num, 2)).reduce((a, b) => a + b);
}

//another solution
function sumSquares(array) {
  var result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i] ** 2;
  }
  return result;
}

//another solution
function sumSquares(array) {
  return array.reduce((a,b) => a + b ** 2, 0);
}
