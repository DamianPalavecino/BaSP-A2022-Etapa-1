import {
  hasSpecialCharacters,
  hasLettersAndNumbers,
  createErrorMessage,
  deleteErrorMessage,
  getQueryParams,
  hasInvalidInputValue,
} from "./common.js";

window.onload = function () {
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var loginButton = document.getElementById("login-btn");
  var formInputs = document.querySelectorAll("form input");

  var signInDetails = {
    email: "",
    password: "",
  };

  emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
      createErrorMessage(emailInput, "Email is not valid.");
    } else {
      signInDetails.email = emailInput.value;
    }
  };

  emailInput.onfocus = function () {
    if (emailInput.classList.contains("error-input")) {
      deleteErrorMessage(emailInput);
    }
  };

  passwordInput.onblur = function () {
    if (
      hasSpecialCharacters(passwordInput.value) ||
      !hasLettersAndNumbers(passwordInput.value)
    ) {
      createErrorMessage(
        passwordInput,
        "The password can only contain numbers and letters."
      );
    } else if (passwordInput.value.length < 7) {
      createErrorMessage(
        passwordInput,
        "Password must have more than 7 letters."
      );
    } else {
      signInDetails.password = passwordInput.value;
    }
  };

  passwordInput.onfocus = function () {
    if (passwordInput.classList.contains("error-input")) {
      deleteErrorMessage(passwordInput);
    }
  };

  loginButton.onclick = function (e) {
    e.preventDefault();
    if (hasInvalidInputValue(formInputs)) {
      alert(
        "Error: One or more fields are empty or invalid. Please modify them and try again."
      );
    } else {
      fetch(
        "https://basp-m2022-api-rest-server.herokuapp.com/login" +
          getQueryParams(signInDetails)
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonResponse) {
          if (jsonResponse.success) {
            alert("The request has been done succesfully: " + jsonResponse.msg);
          } else {
            throw jsonResponse;
          }
        })
        .catch(function (err) {
          if (err.msg) {
            alert("The request failed: " + err.msg);
          } else {
            var errors = "";
            for (let i = 0; i < err.errors.length; i++) {
              errors += "\n" + err.errors[i].msg;
            }
            alert("The request has failed: " + errors);
          }
        });
    }
  };
};
