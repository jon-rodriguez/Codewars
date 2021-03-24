/*
8kyu - Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function: ####javascript

getNumberFromString(s)
####ruby

get_number_from_string(s)
####CSharp

GetNumberFromString(string s)
*/

function getNumberFromString(s) {
  let arr = s.split('')
  let arr1 = []
  for(let i =0; i<arr.length; i++){
    if(arr[i] === '0' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' || arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9'){
      arr1.push(arr[i])
    }
  }
  return Number(arr1.join(''))
}
