// Functions

/* 6a) Create a function sum that recieves two numeric values and returns the result. Run the function
and save the result in a variable, showing the value of that variable on the browser's console. */

function firstSum(num1, num2) {
  return num1 + num2;
}

var sumResult = firstSum(2, 2);
console.log("6A) 2 + 2 = ", sumResult);

/* 6b) In the last function, add a validation to control if any of the parameter is not a number.
In that case, show an alert saying that one of the parameters has an error and retorn the value NaN as a result. */

function numberSum(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("6B) One of the parameters is not a number");
    return NaN;
  } else {
    return num1 + num2;
  }
}

console.log("6B) 1 + 2 = ", numberSum(1, 2));

// 6c) Create a validating function Integer that recieves a number as a parameter and returns true if it is an integer.

function validateInteger(num) {
  return Number.isInteger(num);
}

console.log("6C) Is 1 an Integer?", validateInteger(1));
console.log("6C) Is 10.5 an Integer?", validateInteger(10.5));

/* 6d) To the sum function in exercise 6b) add a call to the function of the exercise 6c.
Verify that the numbers are integers. In case there are decimals, show an alert with the error
and return the number converted to integer (rounded). */

function validateSum(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("6D) One of the parameters is not a number");
    return NaN;
  } else if (!validateInteger(num1) || !validateInteger(num2)) {
    alert("6D) One of the parameters is not an integer");
    return Math.round(num1 + num2);
  } else {
    return num1 + num2;
  }
}

console.log("6C) 2 + 2.5 = ", validateSum(2, 2.5));
console.log("6C) 2.5 + 3 = ", validateSum(2.5, 3));
console.log("6C) 2 + 3 = ", validateSum(2, 3));

/* 6e) Convert the validation in exercise 6d) in a separated function and call it inside the sum function
testing that everything keeps working correctly. */

function finalSum(num1, num2) {
  return validateSum(num1, num2);
}

console.log("6E) 2 + 2 = ", validateSum(2, 2));
console.log("6E) 2 + 3.2 = ", validateSum(2, 2));
console.log("6E) 2 + true = ", validateSum(2, true));
