function isPalindrome(word) {
  // Write your algorithm here
}

let word = 'mom';
function isPalindrome(word) {
  // Write your algorithm here
  if(word.split("").reverse().join("") === word){
    return true; 
  } else{
    return false;
  }
}


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
