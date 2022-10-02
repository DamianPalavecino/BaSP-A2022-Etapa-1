import {
  onlyLetters,
  createErrorMessage,
  deleteErrorMessage,
  isAlphanumericText,
} from "./common.js";

window.onload = function () {
  var contactNameInput = document.getElementById("contact-name");
  var contactEmailInput = document.getElementById("contact-email");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var rolesSelect = document.getElementById("roles");
  var messageArea = document.getElementById("msg-area");
  var contactButton = document.getElementById("submit-btn");
  var contactDetails = {
    cname: "Required",
    email: "Required",
    roles: "Required",
    msg: "Required",
  };

  contactNameInput.onblur = function () {
    if (
      !onlyLetters(contactNameInput.value) ||
      contactNameInput.value.length <= 3
    ) {
      contactNameInput.classList.add("error-input");
      contactDetails.cname = "Invalid Name";
      createErrorMessage(contactNameInput, "Invalid Name");
    } else {
      contactDetails.cname = contactNameInput.value;
    }
  };

  contactNameInput.onfocus = function () {
    if (contactNameInput.classList.contains("error-input")) {
      contactNameInput.classList.remove("error-input");
      deleteErrorMessage(contactNameInput);
    }
  };

  contactEmailInput.onblur = function () {
    if (!emailExpression.test(contactEmailInput.value)) {
      contactEmailInput.classList.add("error-input");
      contactDetails.email = "Invalid email";
      createErrorMessage(contactEmailInput, "Invalid email");
    } else {
      contactDetails.email = contactEmailInput.value;
    }
  };

  contactEmailInput.onfocus = function () {
    if (contactEmailInput.classList.contains("error-input")) {
      contactEmailInput.classList.remove("error-input");
      deleteErrorMessage(contactEmailInput);
    }
  };

  messageArea.onblur = function () {
    if (messageArea.value.length < 3) {
      messageArea.classList.add("error-input");
      contactDetails.msg = "Invalid Message";
      createErrorMessage(messageArea, "Invalid Message");
    } else {
      contactDetails.msg = messageArea.value;
    }
  };

  messageArea.onfocus = function () {
    if (messageArea.classList.contains("error-input")) {
      messageArea.classList.remove("error-input");
      deleteErrorMessage(messageArea);
    }
  };

  rolesSelect.onblur = function () {
    contactDetails.roles = rolesSelect.options[rolesSelect.selectedIndex].text;
  };

  contactButton.onclick = function (e) {
    e.preventDefault();
    alert(Object.values(contactDetails));
  };
};
