export function createErrorMessage(input, message) {
  if (input.nextSibling.tagName != "P") {
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

export function onlyLetters(str) {
  var hasLetters = true;
  for (var i = 0; i < str.length; i++) {
    if (!isLetter(str[i])) {
      hasLetters = false;
      break;
    }
  }

  return hasLetters;
}

export function onlyNumbers(str) {
  var hasNumbers = true;
  for (var i = 0; i < str.length; i++) {
    if (!isNumber(str[i])) {
      hasNumbers = false;
      break;
    }
  }

  return hasNumbers;
}

export function letterCount(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      count += 1;
    }
  }

  return count;
}

export function isAlphanumericText(str) {
  var isAlphanumeric = true;
  for (var i = 0; i < str.length; i++) {
    if (!isLetter(str[i]) && isNaN(str[i]) && str[i] != " ") {
      isAlphanumeric = false;
      break;
    }
  }
  return isAlphanumeric;
}

export function hasLettersAndNumbers(str) {
  var hasNumber = false;
  var hasLetter = false;
  for (var i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      hasLetter = true;
    }
    if (isNumber(str[i])) {
      hasNumber = true;
    }
  }
  return hasNumber && hasLetter;
}
