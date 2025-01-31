// let btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

let baba = document.getElementById("baba");
let pappa = document.getElementById("pappa");
let porga = document.getElementById("porga");
let inp = document.querySelector("#inp");

// baba.addEventListener("click", (e) => {
//   alert("Clicked on Baba");
// });

// pappa.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   alert("Clicked on pappa");
// });

// porga.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   alert("Clicked on porga");
//   console.log(e.target);
// });

// inp.addEventListener("input", (e) => {
//   console.log(e.target);
// });

// inp.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// baba.addEventListener("mouseenter", () => {
//   console.log("ENTERD IN DIV");
// });

// baba.addEventListener("mouseleave", () => {
//   console.log("EXITED FROM DIV");
// });

// baba.addEventListener("wheel", () => {
//   console.log("scroll");
// });

// baba.addEventListener("mouseenter", (e) => {
//   //   baba.style.backgroundColor = "blue";
// });

let form = document.querySelector("form");
// let val2 = document.querySelector("#val2");
let val1 = document.querySelector("#val1");
let label = document.getElementById("res");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Validation
  //   if (val1.value.length !== 0 && val2.value.length !== 0) {
  //     console.log("Form Submitted");
  //   } else {
  //     console.log("Invalid Form Details!");
  //   }

  let age = parseInt(val1.value);
  if (age > 18 && age <= 30) {
    label.textContent = "AGE IS VALID";
    label.style.color = "green";
  } else if (age == 18) {
    let con = confirm("TERE PASS HAI KYA CARDVOTING KA");
    if (con) {
      label.textContent = "THIK HAI KARLE VOTE";
      label.style.color = "yellow";
    } else {
      label.textContent = "BHAI JA TU CARD BANAKE AANA VAPAS";
      label.style.color = "RED";
    }
  } else {
    label.textContent = "AGE IS NOT VALID";
    label.style.color = "red";
  }

  let regex = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`;
  if (regex.test(val1.value)) {
  } else {
  }
});
