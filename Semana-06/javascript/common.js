export function createErrorMessage(input, message) {
  if (input.nextElementSibling.tagName != "P") {
    var errorMessage = document.createElement("p");
    errorMessage.innerText = message;
    errorMessage.classList.add("error-msg");
    input.after(errorMessage);
  }
}

export function deleteErrorMessage(input) {
  if (input.nextElementSibling.tagName == "P") {
    input.nextElementSibling.remove();
  }
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isNumber(n) {
  return !isNaN(n) && n !== " ";
}

function isSpecialCharacter(c) {
  return !isLetter(c) && !isNumber(c);
}

export function hasSpecialCharacters(str) {
  var hasSpecialCharacters = false;
  for (var i = 0; i < str.length; i++) {
    if (isSpecialCharacter(str[i])) {
      hasSpecialCharacters = true;
      break;
    }
  }

  return hasSpecialCharacters;
}

function onlyLetters(str) {
  var hasLetters = true;
  for (var i = 0; i < str.length; i++) {
    if (!isLetter(str[i])) {
      hasLetters = false;
      break;
    }
  }

  return hasLetters;
}

function onlyNumbers(str) {
  var hasNumbers = true;
  for (var i = 0; i < str.length; i++) {
    if (!isNumber(str[i])) {
      hasNumbers = false;
      break;
    }
  }

  return hasNumbers;
}
