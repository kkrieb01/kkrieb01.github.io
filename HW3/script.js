var generateBtn = document.querySelector("#generate");
 
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter number of characters desired. (Choose any number between 8-128")

  var lowerCases = confirm("Do you want to include lowercase letters?")

  var upperCases = confirm("Do you want to include uppercase letters?")

  var numbers = confirm("Do you want to include numbers?")

  var special =confirm("Do you want to include special characters?")

  //min count
  var minimumCount = 0;

  //empty mins for variables above
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

//button generator functions
var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

};

if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;
}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;
}

if (upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;
}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}


//empty string value for loop below
var randomPasswordGenerated = "";

//loops through random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
}

//ensures characters are added to password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;
}


