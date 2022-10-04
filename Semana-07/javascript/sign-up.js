import {
  createErrorMessage,
  deleteErrorMessage,
  onlyLetters,
  onlyNumbers,
  hasSpecialCharacters,
  isAlphanumericText,
  hasLettersAndNumbers,
  letterCount,
  spaceCount,
  getQueryParams,
  saveDataToLocalStorage,
} from "./common.js";

window.onload = function () {
  var firstName = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var dni = document.getElementById("dni");
  var birthDate = document.getElementById("dob");
  var emailInput = document.getElementById("email");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var postalCode = document.getElementById("zip");
  var passwordInput = document.getElementById("password");
  var repeatPasswordInput = document.getElementById("password2");
  var phoneInput = document.getElementById("phone");
  var addressInput = document.getElementById("address");
  var cityInput = document.getElementById("city");
  var createButton = document.getElementById("create-btn");
  var formInputs = document.querySelectorAll("form input");

  var signUpDetails = {
    name: "Required",
    lastName: "Required",
    dni: "Required",
    dob: "Required",
    email: "Required",
    address: "Required",
    city: "Required",
    zip: "Required",
    password: "Required",
    password2: "Required",
    phone: "Required",
    // TODO: What to do with "password2"? It doesnt matter if you add extra parameters
  };

  firstName.onblur = function () {
    if (!onlyLetters(firstName.value)) {
      signUpDetails.name = "Invalid first name";
      createErrorMessage(firstName, "Name must have only letters.");
    } else if (firstName.value.length <= 3) {
      signUpDetails.name = "Invalid first name";
      createErrorMessage(firstName, "Name must have more than 3 letters.");
    } else {
      signUpDetails.name = firstName.value;
    }
  };

  lastName.onblur = function () {
    if (!onlyLetters(lastName.value)) {
      signUpDetails.lastName = "Invalid last name";
      createErrorMessage(lastName, "Last name must have only letters.");
    } else if (lastName.value.length <= 3) {
      signUpDetails.lastName = "Invalid last name";
      createErrorMessage(lastName, "Last name must have more than 3 letters.");
    } else {
      signUpDetails.lastName = lastName.value;
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
    if (
      !emailExpression.test(emailInput.value) ||
      emailInput.value.trim() != emailInput.value
    ) {
      signUpDetails.email = "Invalid email";
      createErrorMessage(emailInput, "Email is not valid.");
    } else {
      signUpDetails.email = emailInput.value;
    }
  };

  postalCode.onblur = function () {
    if (!onlyNumbers(postalCode.value)) {
      signUpDetails.zip = "Invalid Postal Code";
      createErrorMessage(postalCode, "Postal Code can only contain numbers");
    } else if (postalCode.value.length > 5 || postalCode.value.length < 4) {
      signUpDetails.zip = "Invalid Postal Code";
      createErrorMessage(
        postalCode,
        "Postal Code must have between 4 and 5 characters"
      );
    } else {
      signUpDetails.zip = postalCode.value;
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

  addressInput.onblur = function () {
    if (
      !hasLettersAndNumbers(addressInput.value) ||
      !isAlphanumericText(addressInput.value) ||
      addressInput.value.trim() != addressInput.value ||
      addressInput.value.indexOf(" ") == -1
    ) {
      signUpDetails.address = "Invalid address";
      createErrorMessage(
        addressInput,
        "Address must have letters, numbers and an space in the middle"
      );
    } else if (addressInput.value.length < 5) {
      signUpDetails.address = "Invalid address";
      createErrorMessage(
        addressInput,
        "Address must have at least 5 characters"
      );
    } else if (spaceCount(addressInput.value) > 1) {
      signUpDetails.address = "Invalid address";
      createErrorMessage(
        addressInput,
        "Address can only have one space in the middle"
      );
    } else {
      signUpDetails.address = addressInput.value;
    }
  };

  cityInput.onblur = function () {
    if (
      !isAlphanumericText(cityInput.value) ||
      cityInput.value.trim() != cityInput.value
    ) {
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

  function fixDateFormat(date) {
    var dateArray = [];
    var temporaryVar = "";
    var newDate = "";
    if (date.includes("-")) {
      dateArray = date.split("-");
      dateArray.reverse();
      temporaryVar = dateArray[0];
      dateArray[0] = dateArray[1];
      dateArray[1] = temporaryVar;
      newDate = dateArray.join("/");
    } else if (date.includes("/")) {
      dateArray = date.split("/");
      temporaryVar = dateArray[1];
      dateArray[1] = dateArray[0];
      dateArray[0] = temporaryVar;
      dateArray.reverse();
      newDate = dateArray.join("-");
    }

    return newDate;
  }

  birthDate.onblur = function () {
    if (birthDate.value === "") {
      createErrorMessage(birthDate, "You must insert a valid birth date");
    } else {
      signUpDetails.dob = fixDateFormat(birthDate.value);
    }
  };

  // Set an on focus event to every input element to delete an error message if it exists
  Array.from(formInputs).forEach(function (elem) {
    elem.onfocus = function () {
      if (elem.classList.contains("error-input")) {
        deleteErrorMessage(elem);
      }
    };
  });

  createButton.onclick = function (e) {
    e.preventDefault();
    console.log(getQueryParams(signUpDetails));
    if (
      Object.values(signUpDetails).some(function (elem) {
        return elem.includes("Required") || elem.includes("Invalid");
      })
    ) {
      alert(
        "Some fields are incomplete or invalid. Please modify them and try again."
      );
    } else {
      fetch(
        "https://basp-m2022-api-rest-server.herokuapp.com/signup" +
          getQueryParams(signUpDetails)
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonResponse) {
          if (jsonResponse.success) {
            saveDataToLocalStorage(jsonResponse.data);
            alert("The request has been done succesfully: " + jsonResponse.msg);
          } else {
            throw jsonResponse;
          }
        })
        .catch(function (err) {
          if (err.hasOwnProperty("errors")) {
            err.errors.forEach(function (error) {
              alert("Error: " + error.msg);
            });
          } else {
            alert("Error: " + err.msg);
          }
        });
    }
  };

  // If there is data stored in the Local Storage, use a forEach loop
  // to set the default values of inputs using the data from the local storage.
  // Also, asign the values to each key in the signUpDetails object.
  if (localStorage.registered) {
    Array.from(formInputs).forEach(function (elem) {
      if (elem.id === "dob") {
        elem.defaultValue = fixDateFormat(localStorage.getItem(elem.id));
        signUpDetails[elem.id] = localStorage.getItem(elem.id);
      } else {
        elem.defaultValue = localStorage.getItem(elem.id);
        signUpDetails[elem.id] = localStorage.getItem(elem.id);
      }
    });
  }
};
