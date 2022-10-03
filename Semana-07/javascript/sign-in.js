import {
  hasSpecialCharacters,
  hasLettersAndNumbers,
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
      alert(`Error:
      Email: ${signInDetails.email}
      Password: ${signInDetails.password}
            `);
    } else {
      alert(`Log in succesful:
      Email: ${signInDetails.email}
      Password: ${signInDetails.password}
            `);
    }
  };
};
