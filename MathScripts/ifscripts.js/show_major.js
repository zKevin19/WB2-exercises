let a = 10;
let b = 20;
let c = 30;

// Find the smallest number
let min = a;
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}
console.log("The smallest number is: " + min);

// Find the largest number
let max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
console.log("The largest number is: " + max);