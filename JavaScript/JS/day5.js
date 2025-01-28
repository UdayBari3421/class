let listItems = document.getElementsByClassName("list-item");
// let ul = document.getElementById("ul");
let btn = document.getElementById("change");
let ul = document.getElementById("ul");
let container = document.querySelector("#container");
let li5 = document.getElementById("li5");

// btn.removeEventListener("click");

// parentElement : access the parent of Element
// childNodes : access the all children Node Including the text and Comment Node
// parentNode : access the exact node ( may be they text comment or element Node)
// nextSibling, nextElementSibling : select node and element next to it
// previousSibling, previousElementSibling : select node and element to it

// console.log(ul.childNodes[0].parentElement);
// window object : prompt, confirm & alert

// document is the whole page of html , when we type document.body we can access the body similarly document.head and document.title

ul.classList.add("class2");
ul.classList.remove("class1");

// ul.style.background = "blue";

btn.addEventListener("click", () => {
  //   ul.classList.toggle("class3");
  //   console.log(ul.classList.contains("class3"));
  //   console.log(ul.className);
  //   let promptValue = prompt("Eneter the value");
  //   console.log(promptValue);
  //   let agree = confirm("Are You Agree");
  //   alert(agree);
  //   let color = prompt("Enter The Color");
  //   document.body.style.background = color;
  //   console.log(document);
  //   container.setAttribute("src", "");
  //   let div = document.createElement("div");
  //   div.textContent = "Hello This Is Dynamically Created Div";
  //   container.prepend(div); // insert element at the first
  //   container.append(div); // insert element at the last
  //   let li = document.createElement("li");
  //   li.innerText = "11";
  //   ul.append(li);
  //   li5.before(li);
  //   li5.after(li);
  //   ul.remove();
  //   li.previousElementSibling.previousElementSibling.remove();
  // how to parse String Number to Integer Number
  //   let age = prompt("Enter the Age");
  //   console.log(Number.parseInt(age));
});

/*
    TODO : before, after, prepend, append, appendChild
    TODO : Page Backgoround Change uisng prompt
    TODO : Use ClassList, ClassName && Try contains function to check given class is available or not to current Element 
    TODO : add Dynamicaly Class to specific element 
    TODO : Create Element and push in the html Container && remove Specific Dom ElementNode 
    TODO : If User Age is less than 18 he is not allowed to Drive and If greater than 18 allowed to drive
*/
