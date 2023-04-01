function isPalindrome(word) {
  // Write your algorithm here
  const wordLength = word.length;
  for(let i = 0; i < wordLength / 2; i++) {
  if(word[i] === word[wordLength - 1 - i]) {
    return true;
  }else {
    return false;
  }
}
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));
/* 
  Add your pseudocode here
  Function receives one argument which is a string 
  It has a for condition that iterates over the argument and within the iterator there's the if loop.

  If the string is a palindrome (that is, if it reads the same forwards and backwards) then, 
  it returns the value of true

  Else, that is, if the string is not a palindrome, then the loop will
  return a false value.

*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes a string as an argument 
  It loops through the condition that checks whether the string is a palindrome,
  if the loop condition finds the string as truthy it returns true
  but if the string is not a palindrome the conditions returns as false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
