import {
  hasSpecialCharacters,
  createErrorMessage,
  deleteErrorMessage,
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
      emailInput.classList.add("error-input");
      createErrorMessage(emailInput, "Invalid email");
      signInDetails.email = "Invalid email";
    } else {
      signInDetails.email = emailInput.value;
    }
  };

  emailInput.onfocus = function () {
    if (emailInput.classList.contains("error-input")) {
      emailInput.classList.remove("error-input");
      deleteErrorMessage(emailInput);
    }
  };

  passwordInput.onblur = function () {
    if (hasSpecialCharacters(passwordInput.value)) {
      passwordInput.classList.add("error-input");
      createErrorMessage(passwordInput, "Invalid password");
      signInDetails.password = "Invalid password";
    } else {
      signInDetails.password = passwordInput.value;
    }
  };

  passwordInput.onfocus = function () {
    if (passwordInput.classList.contains("error-input")) {
      passwordInput.classList.remove("error-input");
      deleteErrorMessage(passwordInput);
    }
  };

  loginButton.onclick = function (e) {
    e.preventDefault();
    alert(Object.values(signInDetails));
  };
};
