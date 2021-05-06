/*
6kyu - Encrypt this!

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

function xor(a, b) {
  // TODO: Program Me
  return a != b;
}

//another solution
function xor(a, b) {
  // TODO: Program Me
  return a===false && b===false ? false : a===true && b===false ? true : a===false && b===true ? true : false
}
