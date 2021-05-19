/*
8kyu - Sum of differences in array


Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/

function sumOfDifferences(arr) {
      if (arr.length<2)
        return 0;
      arrS = arr.sort(function(a,b){return a-b;});
      return arrS[arrS.length - 1] - arrS[0];
    }
