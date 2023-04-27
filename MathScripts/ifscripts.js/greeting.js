"use strict";

var currentTime = 20;
var greeting;

if (currentTime < 10) {
  greeting = "Good Morning!";
} else if (currentTime < 17) {
  greeting = "Good Day!";
} else {
  greeting = "Good Evening!";
}

console.log(currentTime + greeting);
