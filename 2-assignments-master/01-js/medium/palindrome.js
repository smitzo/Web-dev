/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let n=str.length;
  for (let i=0;i<n;i++){

    // str[i]=str[i].toLowerCase();
    // str[n-i]=str[n-i].toLowerCase();

    if (!str[i]===str[n-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
