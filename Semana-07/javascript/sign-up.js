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
    if (!onlyLetters(firstName.value) || firstName.value.length <= 3) {
      firstName.classList.add("error-input");
      signUpDetails.fname = "Invalid first name";
      createErrorMessage(firstName, "Invalid first name");
    } else {
      signUpDetails.fname = firstName.value;
    }
  };

  firstName.onfocus = function () {
    if (firstName.classList.contains("error-input")) {
      firstName.classList.remove("error-input");
      deleteErrorMessage(firstName);
    }
  };

  lastName.onblur = function () {
    if (!onlyLetters(lastName.value) || lastName.value.length <= 3) {
      lastName.classList.add("error-input");
      signUpDetails.lname = "Invalid last name";
      createErrorMessage(lastName, "Invalid last name");
    } else {
      signUpDetails.lname = lastName.value;
    }
  };

  lastName.onfocus = function () {
    if (lastName.classList.contains("error-input")) {
      lastName.classList.remove("error-input");
      deleteErrorMessage(lastName);
    }
  };

  dni.onblur = function () {
    if (!onlyNumbers(dni.value) || dni.value.length < 7) {
      dni.classList.add("error-input");
      signUpDetails.dni = "Invalid DNI";
      createErrorMessage(dni, "Invalid DNI");
    } else {
      signUpDetails.dni = dni.value;
    }
  };

  dni.onfocus = function () {
    if (dni.classList.contains("error-input")) {
      dni.classList.remove("error-input");
      deleteErrorMessage(dni);
    }
  };

  emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
      emailInput.classList.add("error-input");
      signUpDetails.email = "Invalid email";
      createErrorMessage(emailInput, "Invalid email");
    } else {
      signUpDetails.email = emailInput.value;
    }
  };

  emailInput.onfocus = function () {
    if (emailInput.classList.contains("error-input")) {
      emailInput.classList.remove("error-input");
      deleteErrorMessage(emailInput);
    }
  };

  postalCode.onblur = function () {
    if (
      !onlyNumbers(postalCode.value) ||
      postalCode.value.length > 5 ||
      postalCode.value.length < 4
    ) {
      postalCode.classList.add("error-input");
      signUpDetails.postalcode = "Invalid Postal Code";
      createErrorMessage(postalCode, "Invalid Postal Code");
    } else {
      signUpDetails.postalcode = postalCode.value;
    }
  };

  postalCode.onfocus = function () {
    if (postalCode.classList.contains("error-input")) {
      postalCode.classList.remove("error-input");
      deleteErrorMessage(postalCode);
    }
  };

  passwordInput.onblur = function () {
    if (
      hasSpecialCharacters(passwordInput.value) ||
      passwordInput.value.length < 8
    ) {
      passwordInput.classList.add("error-input");
      signUpDetails.password = "Invalid Password";
      createErrorMessage(passwordInput, "Invalid Password");
    } else {
      signUpDetails.password = passwordInput.value;
    }
  };

  passwordInput.onfocus = function () {
    if (passwordInput.classList.contains("error-input")) {
      passwordInput.classList.remove("error-input");
      deleteErrorMessage(passwordInput);
    }
  };

  repeatPasswordInput.onblur = function () {
    if (
      hasSpecialCharacters(repeatPasswordInput.value) ||
      repeatPasswordInput.value.length < 8
    ) {
      repeatPasswordInput.classList.add("error-input");
      signUpDetails.password2 = "Invalid Confirmation of Password";
      createErrorMessage(repeatPasswordInput, "Invalid Password");
    } else {
      signUpDetails.password2 = repeatPasswordInput.value;
    }
  };

  repeatPasswordInput.onfocus = function () {
    if (repeatPasswordInput.classList.contains("error-input")) {
      repeatPasswordInput.classList.remove("error-input");
      deleteErrorMessage(repeatPasswordInput);
    }
  };

  phoneInput.onblur = function () {
    if (!onlyNumbers(phoneInput.value) || phoneInput.value.length != 10) {
      phoneInput.classList.add("error-input");
      signUpDetails.phone = "Invalid phone number";
      createErrorMessage(phoneInput, "Invalid phone");
    } else {
      signUpDetails.phone = phoneInput.value;
    }
  };

  phoneInput.onfocus = function () {
    if (phoneInput.classList.contains("error-input")) {
      phoneInput.classList.remove("error-input");
      deleteErrorMessage(phoneInput);
    }
  };

  adressInput.onblur = function () {
    if (
      !hasLettersAndNumbers(adressInput.value) ||
      !isAlphanumericText(adressInput.value) ||
      adressInput.value.trim() != adressInput.value ||
      adressInput.value.indexOf(" ") == -1 ||
      adressInput.value.length < 5
    ) {
      adressInput.classList.add("error-input");
      signUpDetails.adress = "Invalid adress";
      createErrorMessage(adressInput, "Invalid adress");
    } else {
      signUpDetails.adress = adressInput.value;
    }
  };

  adressInput.onfocus = function () {
    if (adressInput.classList.contains("error-input")) {
      adressInput.classList.remove("error-input");
      deleteErrorMessage(adressInput);
    }
  };

  cityInput.onblur = function () {
    if (
      !isAlphanumericText(cityInput.value) ||
      letterCount(cityInput.value) < 3
    ) {
      cityInput.classList.add("error-input");
      signUpDetails.city = "Invalid city name";
      createErrorMessage(cityInput, "Invalid city name");
    } else {
      signUpDetails.city = cityInput.value;
    }
  };

  cityInput.onfocus = function () {
    if (cityInput.classList.contains("error-input")) {
      cityInput.classList.remove("error-input");
      deleteErrorMessage(cityInput);
    }
  };

  birthDate.onblur = function () {
    signUpDetails.birthdate = birthDate.value;
  };

  createButton.onclick = function (e) {
    e.preventDefault();
    alert(Object.values(signUpDetails));
  };
};
