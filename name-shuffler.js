/*
8kyu - Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

function nameShuffler(str){
  //Shuffle It
  let arr = str.split(' ')
  let temp = arr[0]
  arr[0] = arr[1]
  arr[1] = temp

  return arr.join(' ')
}
