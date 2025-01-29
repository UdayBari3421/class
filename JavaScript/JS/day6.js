let btn = document.querySelector("button");

// Syntax to add Event Listener
// btn.addEventListener("click", clicked);

// ()=>{} : Aero Call Back
// function () {} : Anonymus Call Back

// Syntax to remove Enevt Listener
// btn.removeEventListener("click");

// const clicked = () => {};

// let container = document.querySelector("#container");

// container.addEventListener("mouseenter", () => {
//   console.log("Entered");
// });

// container.addEventListener("mouseleave", () => {
//   console.log("Leaved");
// });

// document.addEventListener("keyup", () => {
//   console.log("Key Uped");
// });

// btn.addEventListener("click", (eventObject) => {
//   console.log(eventObject);
// });

document.querySelector("form").addEventListener("submit", (eventObject) => {
  console.log("Form is Submitted");
});
