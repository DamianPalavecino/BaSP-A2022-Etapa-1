/* 5a) Create an array that contains 5 words and iterate through that array using a JavaScript for loop
to show an alert with each of those words*/

var words = ["computer", "chair", "keyboard", "monitor", "mouse"];
console.log("5A) Array: ", words);
for (var i = 0; i < words.length; i++) {
  alert("5A) " + words[i]);
}

// 5b) Convert the first letter of each word in the last array into uppercase and show an alert for each modified word

for (var i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  alert("5B) " + words[i]);
}

/* 5c) Create a variable called "sentence" which holds an empty string, after that iterate throught the array of a)
with a for loop to save every word inside the variable sentence.
In the end, show an unique alert with the complete string.*/

var sentence = "";
for (var i = 0; i < words.length; i++) {
  sentence += words[i];
}
console.log("5C) Sentence: ", sentence);
alert("5C) " + sentence);

/* 5d) Create an empty array and a for loop of 10 repetitions. Fill the array with the number of the repetition,
which means that at the end of the ejecution the loop should have ten elements inside the array, from number 0 to
number 9. Show in console of the browser the final array (use console.log) */

var newArray = [];
for (var i = 0; i < 10; i++) {
  newArray.push(i);
}
console.log("5D) ", newArray);
