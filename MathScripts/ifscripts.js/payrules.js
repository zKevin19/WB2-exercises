"use strict";

// Input
var hoursWorked = 45;

var basePayRate = 25;

// Supporting calculated values
var standardPayRate = basePayRate * 1;
var overtimePayRate = basePayRate * 1.5;


// initialize the output
var grossPay; 


//compute the output

// if there was overtime, only the hours over 40 are paid at the higher rate, so we break this down.
if (hoursWorked > 40) {
    var standardPay = 40 * standardPayRate;
    var overtimeHours = hoursWorked - 40;
    var overtimePay = overtimeHours * overtimePayRate;
    grossPay = standardPay + overtimePay;
}

// if there was no overtime, the calculation is much easier...
if (hoursWorked <= 40){
    grossPay = hoursWorked * standardPay;
}


//output the output
console.log(grossPay)