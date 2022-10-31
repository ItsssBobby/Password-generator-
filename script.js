// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays for chars
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var confirmLength; 
var isSpecial;
var isUpper;
var isLower;
var isNumeric;
var charContain = []

//function to generate the random password
function generatePassword() {
  confirmLength = prompt("How long would you like your password?");

  userCheck(confirmLength);
//prompts to confirm what kind of characters wanted.
  isSpecial = confirm("Press OK to add special characters.");
  isUpper = confirm("Press OK for capital letters.");
  isLower = confirm("Press OK for lower-case letters.");
  isNumeric = confirm("Press OK for numbers.");

  if (isSpecial == false && isUpper == false && isLower == false && isNumeric == false) {
    alert("Password needs at least one character set.")
  }

  if (confirmSpecialCharacter) {
    charContain = charContain.concat(number)
  }

  if (confirmNumericCharacter) {
    charContain = charContain.concat(specialChar)
  }
    
  if (confirmLowerCase) {
    charContain = charContain.concat(alphaLower)
  }

  if (confirmUpperCase) {
    charContain = charContain.concat(alphaUpper)
  }


}
//make sure length is correct, if not re-run genteratePassworD()
function userCheck(checkLength) {
  if (checkLength <= 7 || checkLength > 128) {
    alert("Length must be between 8-128 characters.")
    generatePassword()
  }
    return;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
