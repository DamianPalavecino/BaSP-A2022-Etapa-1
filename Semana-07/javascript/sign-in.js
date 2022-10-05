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
      displayModal(
        "Error",
        "One or more fields are empty or invalid. Please modify them and try again."
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
};
