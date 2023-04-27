"use script"

let payRate = 17.30;
let hoursWorked = 45;
const check = payRate * hoursWorked;

if(hoursWorked>=41){
    const overTime = (hoursWorked - 40) * (payRate * 1.5);
    const overTimeCheck = (40 * payRate) + overTime;
    console.log(overTimeCheck);
}
if(hoursWorked == 40){
    console.log(check);
}
if(hoursWorked<=39){
    console.log(check);
}
const grossMonthly = check * 4.35;
const grossyearly = grossMonthly * 12;
let single;
let joint;

if(single){
      grossyearly<= 1200
      single = grossyearly * 0.05;
}else if(grossyearly <= 25000){
    single = grossyearly * 0.10;

}else if(grossyearly <= 75000){
    single = grossyearly * 0.10;

}else if(grossyearly > 75000){
    single = grossyearly * 0.20;
}

if(joint){
      grossyearly<= 1200
      joint = grossyearly * 0;
}else if(grossyearly <= 25000){
    joint = grossyearly * 0.6;

}else if(grossyearly <= 75000){
    joint = grossyearly * 0.11;

}else if(grossyearly > 75000){
    joint = grossyearly * 0.20;
}

console.log(grossMonthly);
console.log(grossyearly);
console.log(joint);
console.log(single);