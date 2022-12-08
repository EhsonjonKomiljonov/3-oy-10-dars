var elTItle = document.querySelector(".site-title");
var elForm = document.querySelector(".form");
var elInput1 = document.querySelector(".form__input");
var elInput2 = document.querySelector(".form__input2");
var elBtn1 = document.querySelector(".btn1");
var elBtn2 = document.querySelector(".btn2");
var elSubmit = document.querySelector(".button");
// var elResult = document.querySelector(".result");

var array = [
  "Bugatti ",
  "Corvette ",
  "BMW ",
  "Lamborghini ",
  "Mercedes ",
  "Toyota",
];

elTItle.textContent = array;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInput1Val = elInput1.value;
  var elInput2Val = elInput2.value;

  if (elInput1Val != "" && elInput2Val != "") {
    array.unshift([elInput1Val]), array.push([elInput2Val]);
    elTItle.textContent = array;
  } else if (elInput2Val == "" && elInput1Val != "") {
    array.unshift(elInput1Val)
    elTItle.textContent = array;
    return;
  } else if (elInput1Val == "" && elInput2Val != "") {
    array.push(elInput2Val)
    elTItle.textContent = array;
  } else {
    elTItle.textContent = array;
  }
});

elBtn1.addEventListener("click", function () {
  array.shift();
  elTItle.textContent = array;
});

elBtn2.addEventListener("click", function () {
  array.pop();
  elTItle.textContent = array;
});

// var userNumber = +prompt("Son kiriting");
// var i = 0;

// for (i;i <= userNumber; i += 2) {
//   console.log(i);
// }

// ------------------------------UY SIHI---------------------

// ---------------------------1-MASALA-----------------------

// function addition(a, b) {
// 	return a + b;
// }

// ---------------------------1-MASALA-----------------------

// ---------------------------2-MASALA-----------------------

// function convert(minutes) {
// 	var secund = 60;
// 	return secund * minutes;
// }

// ---------------------------2-MASALA-----------------------

// ---------------------------3-MASALA-----------------------

// function addition(num) {
// 	return ++num;
// }

// ---------------------------3-MASALA-----------------------

// ---------------------------4-MASALA-----------------------

// function triArea(base, height) {
// 	return base * height / 2;
// }

// ---------------------------4-MASALA-----------------------

// ---------------------------5-MASALA-----------------------

// function calcAge(age) {
// 	return age * 365;
// }

// ---------------------------5-MASALA-----------------------

// ---------------------------6-MASALA-----------------------

// function remainder(x, y) {
// 	return x % y;
// }

// ---------------------------6-MASALA-----------------------

// ---------------------------7-MASALA-----------------------

// function footballPoints(wins, draws, losses) {
// 	return wins * 3 + draws * 1;
// }

// ---------------------------7-MASALA-----------------------

// ---------------------------8-MASALA-----------------------

// function points(twoPointers, threePointers) {
// 	return twoPointers * 2 + threePointers * 3;
// }

// ---------------------------8-MASALA-----------------------

// ---------------------------9-MASALA-----------------------

// function lessThan100(a, b) {
// 	if(a + b < 100){
//     return true;
//   }else{
//     return false;
//   }
// }

// ---------------------------9-MASALA-----------------------

// ---------------------------10-MASALA-----------------------

// function animals(chickens, cows, pigs) {
// 	return chickens * 2 + cows * 4 + pigs * 4;
// }

// ---------------------------10-MASALA-----------------------
