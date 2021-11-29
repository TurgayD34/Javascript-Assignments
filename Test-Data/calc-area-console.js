// In arithmetic, operations are applied according to certain rules. Calculations are made starting from the innermost parenthesis first. 
// If there is no parenthesis, operations are performed in the following order from left to right.
// Since the mathematical operation we do now is very short, there will be no problem. But if we do not use parentheses in questions 
// such as larger mathematical operations, it may cause errors and the result we can get will of course be wrong. For these reasons, 
// using parentheses allows our mathematical operations to be more regular and to get true results.
// I was working as a maths teacher.

// *************************************************
// Case1
// triangleOne: base = 10cm, height = 13cm
// triangleTwo: base = 16,5cm, height = 20,3cm
let base1 = 10, height1 = 13;
let area1 = (base1 * height1) / 2;
console.log("Area-1 = " + area1);

let base2 = 16.5, height2 = 20.3;
let area2 = (base2 * height2) / 2;
console.log("Area-2 = " + area2);

if(area1 > area2){
    console.log(area1 + " is grater than " + area2);
}
else{
    console.log(area2 + " is grater than " + area1);
}
// *************************************************
// Case2
// triangleThree: base = 16,5cm, height = 20,3cm
// triangleFour: base = 20,3cm, height = 16,5cm
let base3 = 16.5, height3 = 20.3;
let area3 = (base3 * height3) / 2;
console.log("Area-3 = " + area3)

let base4 = 20.3, height4 = 16.5;
let area4 = (base4 * height4) / 2;
console.log("Area-4 = " + area4);

if(area3 > area4){
    console.log(area3 + " is grater than " + area4);
}
else{
    console.log(area4 + " is grater than " + area3);
}
// *************************************************
// Case3
// triangleFive: base = 7,8cm, height = 5,6cm
// triangleSix: base = 9,3cm, height = 12,4cm
let base5 = 7.8, height5 = 5.6;
let area5 = (base5 * height5) / 2;
console.log("Area-5 = " + area5);

let base6 = 9.3, height6 = 12.4;
let area6 = (base6 * height6) / 2;
console.log("Area-6 = " + area6);

if(area5 > area6){
    console.log(area5 + " is grater than " + area6);
}
else{
    console.log(area6 + " is grater than " + area5);
}