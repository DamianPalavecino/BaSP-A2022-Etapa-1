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
  hasInvalidInputValue,
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
  var modal = document.getElementById("myModal");
  var closeBtn = document.getElementsByClassName("close")[0];
  var modalContent = document.getElementsByClassName("modal-content")[0];
  var modalTitle = document.getElementById("modal-title");

  closeBtn.onclick = function () {
    modal.style.display = "none";
    document.querySelectorAll(".modal-msg").forEach(function (element) {
      element.remove();
    });
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelectorAll(".modal-msg").forEach(function (element) {
        element.remove();
      });
    }
  };

  function displayModal(title, value) {
    var message = document.createElement("p");
    modal.style.display = "block";
    modalTitle.textContent = title;
    if (typeof value === "string") {
      var uniqueMessage = document.createElement("p");
      uniqueMessage.classList.add("modal-msg");
      uniqueMessage.textContent = value;
      modalContent.appendChild(uniqueMessage);
    } else {
      for (var i = 0; i < value.length; i++) {
        var message = document.createElement("p");
        message.classList.add("modal-msg");
        message.textContent = value[i].msg;
        modalContent.appendChild(message);
      }
    }
  }

  var signUpDetails = {
    name: "",
    lastName: "",
    dni: "",
    dob: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    password: "",
    phone: "",
  };

  firstName.onblur = function () {
    if (!onlyLetters(firstName.value)) {
      createErrorMessage(firstName, "Name must have only letters.");
    } else if (firstName.value.length <= 3) {
      createErrorMessage(firstName, "Name must have more than 3 letters.");
    } else {
      signUpDetails.name = firstName.value;
    }
  };

  lastName.onblur = function () {
    if (!onlyLetters(lastName.value)) {
      createErrorMessage(lastName, "Last name must have only letters.");
    } else if (lastName.value.length <= 3) {
      createErrorMessage(lastName, "Last name must have more than 3 letters.");
    } else {
      signUpDetails.lastName = lastName.value;
    }
  };

  dni.onblur = function () {
    if (!onlyNumbers(dni.value)) {
      createErrorMessage(dni, "DNI can only contain numbers.");
    } else if (dni.value.length < 7) {
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
      createErrorMessage(emailInput, "Email is not valid.");
    } else {
      signUpDetails.email = emailInput.value;
    }
  };

  postalCode.onblur = function () {
    if (!onlyNumbers(postalCode.value)) {
      createErrorMessage(postalCode, "Postal Code can only contain numbers");
    } else if (postalCode.value.length > 5 || postalCode.value.length < 4) {
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
      createErrorMessage(
        passwordInput,
        "Password can only have numbers and letters"
      );
    } else if (passwordInput.value.length < 8) {
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
      createErrorMessage(
        repeatPasswordInput,
        "Password can only have numbers and letters"
      );
    } else if (repeatPasswordInput.value.length < 8) {
      createErrorMessage(
        repeatPasswordInput,
        "Password must contain more than 8 characters"
      );
    } else if (repeatPasswordInput.value != passwordInput.value) {
      createErrorMessage(repeatPasswordInput, "Passwords must be the same");
    }
  };

  phoneInput.onblur = function () {
    if (!onlyNumbers(phoneInput.value)) {
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
      createErrorMessage(
        addressInput,
        "Address must have letters, numbers and an space in the middle"
      );
    } else if (addressInput.value.length < 5) {
      createErrorMessage(
        addressInput,
        "Address must have at least 5 characters"
      );
    } else if (spaceCount(addressInput.value) > 1) {
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
      createErrorMessage(cityInput, "City name must be an alphanumeric text");
    } else if (letterCount(cityInput.value) < 3) {
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
      // Date formatted to MM/DD/YYYY
      newDate = dateArray.join("/");
    } else if (date.includes("/")) {
      dateArray = date.split("/");
      temporaryVar = dateArray[1];
      dateArray[1] = dateArray[0];
      dateArray[0] = temporaryVar;
      dateArray.reverse();
      // Date formatted to YYYY-MM-DD
      newDate = dateArray.join("-");
    }

    return newDate;
  }

  birthDate.onblur = function () {
    if (birthDate.value === "") {
      createErrorMessage(birthDate, "You must insert a valid birth date");
    } else if (birthDate.value.split("-")[0] > 2022) {
      createErrorMessage(birthDate, "Date of birth must be before today");
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
    if (hasInvalidInputValue(formInputs)) {
      displayModal(
        "Error",
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
            displayModal("Success", jsonResponse.msg);
          } else {
            throw jsonResponse;
          }
        })
        .catch(function (err) {
          if (err.msg) {
            displayModal("Error", err.msg);
          } else {
            displayModal("Error", err.errors);
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
      } else if (elem.id === "password2") {
        elem.defaultValue = localStorage.getItem("password");
      } else {
        elem.defaultValue = localStorage.getItem(elem.id);
        signUpDetails[elem.id] = localStorage.getItem(elem.id);
      }
    });
  }
};
