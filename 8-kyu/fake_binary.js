/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){
let num = x.split('')
let arr= []
for(let i =0; i<num.length; i++){
  if(num[i]<5){
    arr.push(0)
  }
  if(num[i]>=5){
    arr.push(1)
  }

}
  return arr.join('')
}
