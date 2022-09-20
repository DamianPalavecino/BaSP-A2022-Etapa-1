// Arrays

/* 3a) Given the following Array:
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
show through console the fifth and eleventh month (using console.log). */

var monthsArray = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("3A) The fifth month of the year is:", monthsArray[4]);
console.log("3A) The eleventh month of the year is:", monthsArray[10]);

// 3b) Order the months array alphabetically and show it through console (using sort).

console.log("3B) Months ordered alphabetically: ");
console.log(monthsArray.sort());

// 3c) Add an element to the beginning and the end of the array (use unshift and push).

monthsArray.unshift("Begin");
monthsArray.push("End");
console.log("3C)", monthsArray);

// 3d) Remove an element from the beginning and the end of the array (use shift and pop).

monthsArray.shift();
monthsArray.pop();
console.log("3D)", monthsArray);

// 3e) Invert the order of the array.

monthsArray.reverse();
console.log("3E)", monthsArray);

// 3f) Join all of the elements of the array in an unique string where each month is separated by a hypen
console.log("3F)", monthsArray.join("-"));

// 3g) Create a copy of the month array that contains months from Mayo to Noviembre (using slice).

var monthsArrayCopy = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
].slice(4, 11);
console.log("3G)", monthsArrayCopy);
