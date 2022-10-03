import {
  createErrorMessage,
  deleteErrorMessage,
  onlyLetters,
  onlyNumbers,
  hasSpecialCharacters,
  isAlphanumericText,
  hasLettersAndNumbers,
  letterCount,
} from "./common.js";

window.onload = function () {
  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var dni = document.getElementById("dni");
  var birthDate = document.getElementById("birthdate");
  var emailInput = document.getElementById("email");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var postalCode = document.getElementById("postal-code");
  var passwordInput = document.getElementById("password1");
  var repeatPasswordInput = document.getElementById("password2");
  var phoneInput = document.getElementById("phone");
  var adressInput = document.getElementById("adress");
  var cityInput = document.getElementById("city");
  var createButton = document.getElementById("create-btn");
  var formInputs = document.querySelectorAll("form input");

  var signUpDetails = {
    fname: "Required",
    lname: "Required",
    dni: "Required",
    birthdate: "Required",
    email: "Required",
    adress: "Required",
    city: "Required",
    postalcode: "Required",
    password: "Required",
    password2: "Required",
    phone: "Required",
  };

  firstName.onblur = function () {
    if (!onlyLetters(firstName.value)) {
      signUpDetails.fname = "Invalid first name";
      createErrorMessage(firstName, "Name must have only letters.");
    } else if (firstName.value.length <= 3) {
      signUpDetails.fname = "Invalid first name";
      createErrorMessage(firstName, "Name must have more than 3 letters.");
    } else {
      signUpDetails.fname = firstName.value;
    }
  };

  lastName.onblur = function () {
    if (!onlyLetters(lastName.value)) {
      signUpDetails.lname = "Invalid last name";
      createErrorMessage(lastName, "Last name must have only letters.");
    } else if (lastName.value.length <= 3) {
      signUpDetails.lname = "Invalid last name";
      createErrorMessage(lastName, "Last name must have more than 3 letters.");
    } else {
      signUpDetails.lname = lastName.value;
    }
  };

  dni.onblur = function () {
    if (!onlyNumbers(dni.value)) {
      signUpDetails.dni = "Invalid DNI";
      createErrorMessage(dni, "DNI can only contain numbers.");
    } else if (dni.value.length < 7) {
      signUpDetails.dni = "Invalid DNI";
      createErrorMessage(dni, "DNI must have more than 7 characters.");
    } else {
      signUpDetails.dni = dni.value;
    }
  };

  emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
      signUpDetails.email = "Invalid email";
      createErrorMessage(emailInput, "Email is not valid.");
    } else {
      signUpDetails.email = emailInput.value;
    }
  };

  postalCode.onblur = function () {
    if (!onlyNumbers(postalCode.value)) {
      signUpDetails.postalcode = "Invalid Postal Code";
      createErrorMessage(postalCode, "Postal Code can only contain numbers");
    } else if (postalCode.value.length > 5 || postalCode.value.length < 4) {
      signUpDetails.postalcode = "Invalid Postal Code";
      createErrorMessage(
        postalCode,
        "Postal Code must have between 4 and 5 characters"
      );
    } else {
      signUpDetails.postalcode = postalCode.value;
    }
  };

  passwordInput.onblur = function () {
    if (
      !hasLettersAndNumbers(passwordInput.value) ||
      hasSpecialCharacters(passwordInput.value)
    ) {
      signUpDetails.password = "Invalid Password";
      createErrorMessage(
        passwordInput,
        "Password can only have numbers and letters"
      );
    } else if (passwordInput.value.length < 8) {
      signUpDetails.password = "Invalid Password";
      createErrorMessage(
        passwordInput,
        "Password must contain more than 8 characters"
      );
    } else {
      signUpDetails.password = passwordInput.value;
    }
  };

  repeatPasswordInput.onblur = function () {
    if (
      !hasLettersAndNumbers(repeatPasswordInput.value) ||
      hasSpecialCharacters(passwordInput.value)
    ) {
      signUpDetails.password2 = "Invalid confirmation of Password";
      createErrorMessage(
        repeatPasswordInput,
        "Password can only have numbers and letters"
      );
    } else if (repeatPasswordInput.value.length < 8) {
      signUpDetails.password2 = "Invalid confirmation of Password";
      createErrorMessage(
        repeatPasswordInput,
        "Password must contain more than 8 characters"
      );
    } else if (repeatPasswordInput.value != passwordInput.value) {
      signUpDetails.password2 = "Invalid confirmation of Password";
      createErrorMessage(repeatPasswordInput, "Passwords must be the same");
    } else {
      signUpDetails.password2 = repeatPasswordInput.value;
    }
  };

  phoneInput.onblur = function () {
    if (!onlyNumbers(phoneInput.value)) {
      signUpDetails.phone = "Invalid phone number";
      createErrorMessage(phoneInput, "Phone number can only contain numbers");
    } else if (phoneInput.value.length != 10) {
      signUpDetails.phone = "Invalid phone number";
      createErrorMessage(phoneInput, "Phone number must have 10 digits");
    } else {
      signUpDetails.phone = phoneInput.value;
    }
  };

  adressInput.onblur = function () {
    if (
      !hasLettersAndNumbers(adressInput.value) ||
      !isAlphanumericText(adressInput.value) ||
      adressInput.value.trim() != adressInput.value ||
      adressInput.value.indexOf(" ") == -1
    ) {
      signUpDetails.adress = "Invalid adress";
      createErrorMessage(
        adressInput,
        "Address must have letters, numbers and an space in the middle"
      );
    } else if (adressInput.value.length < 5) {
      signUpDetails.adress = "Invalid adress";
      createErrorMessage(
        adressInput,
        "Address must have at least 5 characters"
      );
    } else {
      signUpDetails.adress = adressInput.value;
    }
  };

  cityInput.onblur = function () {
    if (!isAlphanumericText(cityInput.value)) {
      signUpDetails.city = "Invalid city name";
      createErrorMessage(cityInput, "City name must be an alphanumeric text");
    } else if (letterCount(cityInput.value) < 3) {
      signUpDetails.city = "Invalid city name";
      createErrorMessage(
        cityInput,
        "City name must have at least 3 characters"
      );
    } else {
      signUpDetails.city = cityInput.value;
    }
  };

  Array.from(formInputs).forEach(function (elem) {
    elem.onfocus = function () {
      if (elem.classList.contains("error-input")) {
        deleteErrorMessage(elem);
      }
    };
  });

  birthDate.onblur = function () {
    if (birthDate.value === "") {
      createErrorMessage(birthDate, "You must insert a valid birth date");
    } else {
      signUpDetails.birthdate = birthDate.value;
    }
  };

  createButton.onclick = function (e) {
    e.preventDefault();
    if (
      Object.values(signUpDetails).some(function (elem) {
        return elem.includes("Required") || elem.includes("Invalid");
      })
    ) {
      console.log("Error");
    } else {
      console.log("Success");
      // TODO: Finish this
    }
  };
};
