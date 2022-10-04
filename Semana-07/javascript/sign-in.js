import {
  hasSpecialCharacters,
  hasLettersAndNumbers,
  createErrorMessage,
  deleteErrorMessage,
  getQueryParams,
} from "./common.js";

window.onload = function () {
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var loginButton = document.getElementById("login-btn");

  var signInDetails = {
    email: "Required",
    password: "Required",
  };

  emailInput.onblur = function () {
    if (!emailExpression.test(emailInput.value)) {
      createErrorMessage(emailInput, "Email is not valid.");
      signInDetails.email = "Invalid email";
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
      signInDetails.password = "Invalid password";
    } else if (passwordInput.value.length < 7) {
      createErrorMessage(
        passwordInput,
        "Password must have more than 7 letters."
      );
      signInDetails.password = "Invalid password";
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
    if (
      Object.values(signInDetails).some(function (elem) {
        return elem.includes("Required") || elem.includes("Invalid");
      })
    ) {
      alert(
        `Error:
      Email: ` +
          signInDetails.email +
          `
      Password: ` +
          signInDetails.password
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
        .catch(function (error) {
          alert("The request has failed: " + error.msg);
        });
    }
  };
};
