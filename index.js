function isPalindrome(word) {
  // Write your algorithm here
  let txt = /[\W_]/g
  let lastString = word.toLowerCase().replace(txt, '');
  let reverseString = lastString.split('').reverse().join(''); 
  return reverseString === lastString
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  we need to match our text globally with regular expression.
  we need to parse our words to lowercase and replace the text with and empty string. 
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
