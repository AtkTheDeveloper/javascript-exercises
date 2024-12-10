const reverseString = function(string) {
   const myArray = string.split("");
   myArray.reverse();
   return myArray.join("");
};

reverseString("");
// Do not edit below this line
module.exports = reverseString;
