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

let menu = document.querySelector("#menu");
let lang = [`python`, `JS`, `PHP`, `Java`];

let fragment = document.createDocumentFragment();
lang.forEach((language) =>{
    let li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
})

menu.appendChild(fragment);