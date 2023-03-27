const generateBtn = document.querySelector("#generate");
const numbers = "0123456789";
const specialChars = "!%&, *+-./<>?~";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function promptForPasswordLength() {
  const length = parseInt(prompt("How long would you like your password?"), 10);

  if (length < 8 || length > 128) {
    alert("Length must be between 8-128 characters.");
    return promptForPasswordLength();
  }

  return length;
}

function promptForCharacterTypes() {
  const types = {
    hasSpecial: confirm("Press OK to add special characters."),
    hasUpper: confirm("Press OK for capital letters."),
    hasLower: confirm("Press OK for lower-case letters."),
    hasNumeric: confirm("Press OK for numbers."),
  };

  if (!types.hasSpecial && !types.hasUpper && !types.hasLower && !types.hasNumeric) {
    alert("Password needs at least one character set.");
    return promptForCharacterTypes();
  }

  return types;
}

function generatePassword(length, types) {
  let charSet = "";

  if (types.hasNumeric) {
    charSet += numbers;
  }

  if (types.hasSpecial) {
    charSet += specialChars;
  }

  if (types.hasLower) {
    charSet += alphaLower;
  }

  if (types.hasUpper) {
    charSet += alphaUpper;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return password;
}

function writePassword() {
  const length = promptForPasswordLength();
  const types = promptForCharacterTypes();
  const password = generatePassword(length, types);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);