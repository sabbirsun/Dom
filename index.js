/*// let ID1 = document.getElementById("ID1");
// ID1.innerHTML = "I am a Programmer";

// let ClassName1 = document.getElementsByClassName("ClassName1")[0];
// ClassName1.innerHTML = "I'm a professional Programmer";

// let Heading5 = document.getElementsByName("Heading5")[0];
// Heading5.innerHTML = "Heading 5";

// let H1 = document.getElementsByTagName("h1")[0];
// H1.innerHTML = "Heading 1 is Change";

// document.querySelector("#ID1");
// document.querySelector(".ClassName1");
// document.querySelectorAll("h1");*/

// Oneclick Event JS Dom

/*function clickMe() {
    document.write('Button Clicked!');
}
function clickMe1() {
    document.getElementById('ID1').innerHTML = Date();
}*/

// Traversing Dom Elements

/*let pNote = document.querySelector(`.pNote`);
console.log(pNote.parentNode);*/

/*let ParentDiv = document.querySelector(".ParentDiv");

// console.log(ParentDiv.firstElementChild);
// console.log(ParentDiv.lastElementChild);
// console.log(ParentDiv.childNodes);*/

// Sibling Element 

/*let current = document.querySelector(".current");
//console.log(current.nextElementSibling);
console.log(current.previousElementSibling);*/

// Get Element DOM Manipulation ....> Every HTML code in JS create

/*let div = document.createElement("div");
div.id = "SabbirID";
div.className = "SabbirClass";
// let text = document.createTextNode("Inner text into the Div.");
// div.appendChild(text);

let h1 = document.createElement("h1");
h1.textContent = "Inner h1 tag text.";
div.appendChild(h1);
document.body.appendChild(div); // Show div p*/

/*let ul = document.createElement("ul");
ul.id = "menu";
let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);
document.body.appendChild(ul);
let li2 =  document.createElement("li");
li2.textContent = "About";
ul.appendChild(li2);
document.body.appendChild(ul);*/

/*let script = document.createElement("script");
script.src = "sabbir.js";
document.body.appendChild(script);*/

// Manupulating elements appendchild

/*let menu = document.querySelector(".menu");
function createMenu(name){
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}
menu.appendChild(createMenu("Sabbirul"));
menu.appendChild(createMenu("Islam"));
menu.appendChild(createMenu("Sun"));*/

//Text Content Manipulating Elements

/*let note = document.getElementById("note");
console.log(note.textContent);*/

// InnerHTML ....> Very Important

/*let menu = document.querySelector(".menu");
console.log(menu.innerHTML);*/

/* let menu = document.querySelector("#menu");
// let p = document.createElement("p");
// p.textContent = "JS DOM tutorial";
// menu.appendChild(p);

menu.innerHTML = "<p>JS DOM Tutorial</p>";*/

// Fragment Document

/*let menu = document.querySelector("#menu");
let lang = [`python`, `JS`, `PHP`, `Java`];

let fragment = document.createDocumentFragment();
lang.forEach((language) =>{
    let li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
})

menu.appendChild(fragment);*/

// InsertBefore 

/*let menu = document.querySelector("#menu");
let li = document.createElement("li");
li.textContent = "Home";
menu.insertBefore(li, menu.firstElementChild);*/

// Append & Prepend Method

/*let app = document.querySelector("#app");
let name = [`Sabbirul`,`Islam`,`Sun`];

let DOMScript = name.map((name) =>{
    let li = document.createElement("li");
    li.textContent = name;
    return li;
})
app.append(...DOMScript);

// Prepend

let apps = document.querySelector("#apps");
let names = [`I`,`Love`,`You`];

let DOMScript1 = names.map((names) =>{
    let li = document.createElement("li");
    li.textContent = names;
    return li;
})
apps.prepend(...DOMScript1);*/

// Don Insert Adjacent HTML Method 

/*let manu = document.querySelector("#menu");
menu.insertAdjacentHTML("beforebegin", "<h3>beforbegin</h3>");
menu.insertAdjacentHTML("afterbegin", "<h3>afterbegin</h3>");
menu.insertAdjacentHTML("afterend", "<h3>afterend</h3>");
menu.insertAdjacentHTML("beforeend", "<h3>beforeend</h3>");*/

// Replace, Clone, Remove Child in JS ....> Very important

//let menu = document.querySelector("#menu");

// Replace-Child
/* let li = document.createElement("li");

 li.textContent = "Home";

 menu.replaceChild(li, menu.firstElementChild);
 menu.replaceChild(li, menu.lastElementChild);*/

// Remove-Child

 /*menu.removeChild(menu.firstElementChild);
 menu.removeChild(menu.lastElementChild);*/

// Clone Node

/*let cloneNode = menu.cloneNode(true);
cloneNode.id = "cloneID";
document.body.appendChild(cloneNode);*/

// JS Dom Working With Attribute 

/*let div = document.querySelector("div");
div.id = "menu";

setAttribute
let btn = document.querySelector("#btn");
if(btn){
    btn.setAttribute("class", "Sabbir");
}
let btn = document.querySelector("#btn");
if(btn){
    console.log(btn.getAttribute("target"));
}

RemoveAttribute

let btn = document.querySelector("#btn");
if(btn){
    console.log(btn.removeAttribute("target"));
}

hasAttribute

let btn = document.querySelector("#btn");
if(btn){
    console.log(btn.hasAttribute("id")); // Class id check true or false
}*/

// JS Dom Style Property ....> Very Important

/*let menu = document.querySelector("#menu");
menu.style.color = "red";
menu.style.textAlign = "center";*/

// Dom Get Computed Style Method

/*let menu = document.querySelector("#menu");
let style = getComputedStyle(menu, "::first-letter");
console.log(style.width);*/

// JS Dom CLassName Property

/*let p = document.querySelector("p");
p.className = "Sun"; // Class name change
console.log(p.className);*/

// Dom Class List Property ....> Class add, remove, replace, check

/*let menu = document.querySelector("#menu")
menu.classList.add("Sabbirul", "Islam", "Sun");
menu.classList.remove("Sun");
menu.classList.replace("Sun", "Sayla");
menu.classList.check("Sun");
menu.classList.toggle("Sun");*/

// JS Get The Width & Height of An Element Using DOM

let menu = document.querySelector("div");
let width = menu.offsetWidth;
let Height = menu.offsetHeight;
console.log(width,Height);