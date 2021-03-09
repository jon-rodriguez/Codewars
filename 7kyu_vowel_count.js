/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here
  let arr = str.split('')
  for(let i = 0; i<arr.length; i++){
    if(arr[i]== 'a'){
          vowelsCount += 1
       }
       if(arr[i]== 'e'){
          vowelsCount += 1
       }
       if(arr[i]== 'i'){
          vowelsCount += 1
       }
       if(arr[i]== 'o'){
          vowelsCount += 1
       }
       if(arr[i]== 'u'){
          vowelsCount += 1
       }

  }
  return vowelsCount;
}
