// If Else

/* 4a) Create a random number between 0 and 1 using the function Math.random(),
if the value is higher or equal to 0,5 show an alert with the message "Greater than 0,5", else
an alert with the message "Lower than 0,5". */

var randomNumber = Math.random(0, 1);
if (randomNumber >= 0.5) {
  console.log("4A)", randomNumber, "is greater than 0,5");
  alert("4A) Greater than 0,5");
} else {
  console.log("4A)", randomNumber, "is lower than 0,5");
  alert("4A) Lower than 0,5");
}

/* 4b) Create a variable "Age" which contains an integer number between 0 and 100, and shows the following alert messages: */

var Age = Math.floor(Math.random() * 100);
console.log("4B) The age is", Age);
if (Age < 2) {
  alert("4B) Baby");
} else if (Age >= 2 && Age <= 12) {
  alert("4B) Child");
} else if (Age >= 13 && Age <= 19) {
  alert("4B) Teenager");
} else if (Age >= 20 && Age <= 30) {
  alert("4B) Young");
} else if (Age >= 31 && Age <= 60) {
  alert("4B) Adult");
} else if (Age >= 61 && Age <= 75) {
  alert("4B) Older Adult");
} else {
  alert("4B) Old Man");
}
