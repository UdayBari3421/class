// Array :

// npm install -g nodemon

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Arr[0] = " + arr[0]);

// itreate using simple for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log("Arr[" + i + "] = " + arr[i]);
// }

// itrate using higher order function

// add element and remove element from the end of the array
// arr.push(11);
// arr.pop();
// arr.pop();
// arr.pop();

// unshift add the element at the starting of array
// arr.unshift(45);
// shift removes the element from the starting of array
// arr.shift(1);

// console.log(arr.length);

// arr.map((itm) => {
//   console.log(itm);
// });

// let arr2 = ["AB", "B", "C", "D", "E"];

// console.log(arr[0]);
// console.log(arr[0].toString());

// console.log(arr2);
// for (let a = 0; a < arr2.length; a++) {
//   console.log(arr2[a]);
// }

// let slicepfArr = arr.slice(2, 4);
// console.log(slicepfArr);
// console.log("Used slice before this Print :" + arr);

// Splice effects on the original array Where Slice does not chnage the original array

// let spliceofArr = arr.splice(0, 4);
// console.log(spliceofArr);
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr3 = [4, 5, 6];

// let arr4 = arr1.concat(arr3);
// let nestedArray = [1, 2, 3, 4, 5, [44, 33, 22, 11, [7, 8, 9]]];

// console.log(nestedArray);
// console.log(nestedArray.flat(2));

// delete arr3;
// console.log("Arr4 : " + arr4.join(" "));

// let str = "My name is Uday";
// console.log(str);
// console.log(str.split(" ").join(" "));

// console.log(arr.indexOf(1, 0));

// Object

// let obj = {
//   Roll: 1,
//   Name: "Uday",
//   "Sur Name": "Bari",
//   CollegePercentages: [7.8, 8.5, 9.3],
//   colleges: {
//     BCA: "IMR",
//     MCA: "AUTONOMUS IMR",
//   },
//   addTwoNumbers: function (a, b) {
//     return a + b;
//   },
// };

// console.log(obj.CollegePercentages[0]);
// console.log(obj.colleges.BCA);
// console.log(obj.addTwoNumbers(5, 6));

// functions

// named Function
// function addTwoNumbers(a, b) {
//   return a + b;
// }

// console.log(addTwoNumbers(4, 6));

// Arrow Function This Comes in ES6 (ECMA SCRIPT JAVASCRIPT DEVLOPEMENT TEAM) VERSION 6
// let addTwoNumbers = (a, b) => {
//   return a + b;
// };

// console.log(addTwoNumbers(4, 6));

// Anonymus Function
let a = function (a, b) {
  return a + b;
};

let mathematicalFunctions = (a, b) => {
  let obj = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a * b,
  };
};
