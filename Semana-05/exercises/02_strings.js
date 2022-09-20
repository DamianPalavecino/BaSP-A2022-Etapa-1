// Strings

/* 2a) Create a variable of String type with at least 10 characters
and convert all the text to upercase (using toUpperCase);*/

var firstPhrase = "The world is a happy place.";
var upperCasePhrase = firstPhrase.toUpperCase();
console.log("2A) Normal text:", firstPhrase);
console.log("2A) The string in uppercase:", upperCasePhrase);

/* 2b) Create a variable of String type with at least 10 characters and generate a new string with the
first 5 characters saving the result in a new variable (using substring).*/

var bestCourse = "RadiumRocket";
var firstSubString = bestCourse.substring(0, 5);
console.log("2B) The first 5 characters of RadiumRocket are", firstSubString);

/* 2c) Create a new variable of String type with at least 10 characters
and generate a new string with the last 3 characters saving the result in a new variable (using substring) */

var bestLanguage = "JavaScript";
var secondSubString = bestLanguage.substring(7);
console.log("2C) The last 3 characters of Javascript are", secondSubString);

/* 2d) Create a variable of String type with at least 10 characters and
generate a new string with the first letter in uppercase and the rest in lowercase.
Save the result in a new variable (using substring, toUpperCase, toLowerCase and the + operator). */

var randomStr = "dAMIANPALAVECINO";
var betterString =
  randomStr.substring(0, 1).toUpperCase() +
  randomStr.substring(1).toLowerCase();
console.log("2D) Normal string", randomStr);
console.log("2D) Converted string", betterString);

/* 2e) Create a variable of String type with at least 10 characters and some white space. Find the position of the
first blank space and save it in a variable (use indexOf).*/

var separatedString = "Become a Software Professional";
var blankSpaceIndex = separatedString.indexOf(" ");
console.log(
  "2E) The first blank space of 'Become a Software Professional' can be found in the index",
  blankSpaceIndex
);

/* 2f) Create a variable of String type with at least 2 long words (10 characters and some space between).
Use the methods from the past exercises to generate a new String that has the first letter of both words
in uppercase and the rest in lowercase (use indexOf, substring, toUpperCase, toLowerCase and the + operator)
*/

var profession = "software professional";
var betterLongString =
  profession.substring(profession.indexOf("s"), 1).toUpperCase() +
  profession.substring(1, 9).toLowerCase() +
  profession.substring(profession.indexOf("p"), 10).toUpperCase() +
  profession.substring(10).toLowerCase();
console.log("2F) Normal Text:", profession);
console.log("2F) Text converted:", betterLongString);
