// Rest Operator
// function add(...arguments) {
//   return arguments.reduce((p, n) => p + n);
// }

// console.log(add(2, 2, 4, 2));

// console.log(obj);
// console.log(obj2);

// Sread Operator
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];

// console.log(arr2);

// // fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log("Console from Promise", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(data);

// new Promise((resove, reject) => {
//   //code
// })
//   .then(() => {})
//   .catch(() => {});

// let promise1 = new Promise((resove, reject) => {
//   //code
// })
//   .then(() => {})
//   .catch(() => {});

// promise1.then(() => {}).catch(() => {});

// let promise2 = new Promise((resove, reject) => {
//   console.log("SET TIMEOUT CLG");
// });

// console.log(promise2);

// async function fetchData() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/users/");
//   let res = await data.json();

//   console.log(res);
// }

// fetchData();

// Shallow Copy
// let obj = {
//   name: "Lenovo",
//   processor: "intel i9",
//   price: 80000,
//   spesifications: {
//     processor: {
//       Cpu: "8core",
//       Gpu: "RTX5600",
//     },
//   },
// };

// let obj2 = { ...obj };
// obj2.name = "ACER";
// obj2.spesifications.processor.Gpu = "NVDIA";

// console.log(obj);
// console.log(obj2);

// DEEP COPY USING JSON
let obj = {
  name: "Lenovo",
  processor: "intel i9",
  price: 80000,
  spesifications: {
    processor: {
      Cpu: "8core",
      Gpu: "RTX5600",
    },
  },
};

let obj2 = JSON.stringify(obj);
obj2 = JSON.parse(obj2);

obj2.name = "ACER";
obj2.spesifications.processor.Gpu = "NVDIA";

console.log(obj);
console.log(obj2);
