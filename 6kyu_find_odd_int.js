/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. 
*/

function findOdd(numbers) {
var count = 0;
  for(var i = 0; i<numbers.length; i++){
    for(var j = 0; j<numbers.length; j++){
      if(numbers[i] == numbers[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return numbers[i];
    }
  }
}
