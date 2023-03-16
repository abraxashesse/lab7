var div = document.getElementById("Heading1");
div.remove();

//h1
const h1 = document.createElement("h1");
h1.innerText = "Lab7 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

hr = document.createElement("hr");
document.body.appendChild(hr);

//Task
const h21 = document.createElement("h2");
h21.innerText = "Task";
h21.setAttribute("style","color:red");
document.body.appendChild(h21);

const p1 = document.createElement("p");
p1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

var ul1 = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "find elements in the DOM (5 points);";
li1.style.color = "green";
const li2 = document.createElement("li");
li2.innerText = "create/add/remove elements (5 points);";
li2.style.color = "purple";
const li3 = document.createElement("li");
li3.innerText = "change content of the elements (5 points);";
li3.style.color = "green";
const li4 = document.createElement("li");
li4.innerText = "change styles of the elements (5 points);";
li4.style.color = "purple";
const li5 = document.createElement("li");
li5.innerText = "change attributes of the elements (5 points);";
li5.style.color = "green";
const li6 = document.createElement("li");
li6.innerText = "change classes of the elements (5 points).";
li6.style.color = "purple";
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);
document.body.appendChild(ul1);

hr = document.createElement("hr");
document.body.appendChild(hr);

//Submission
const h22 = document.createElement("h2");
h22.innerText = "Submission";
h22.setAttribute("style","color:red");
document.body.appendChild(h22);

const p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

var ul2 = document.createElement("ul");
const li21 = document.createElement("li");
li21.innerText = "Create a new repository on Github, named lab7 (1 point).";
li21.style.color = "green";
li21.classList.add("even");
const li22 = document.createElement("li");
li22.innerText = "Clone this repository to your local machine and work inside it.";
li22.style.color = "purple";
li22.classList.add("odd");
const li23 = document.createElement("li");
li23.innerText = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).';
li23.style.color = "green";
li23.classList.add("even");
const li24 = document.createElement("li");
li24.innerText = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).";
li24.style.color = "purple";
li24.classList.add("odd");
const li25 = document.createElement("li");
li25.innerText = "Link this main.js file to your index.html file (Note: place your script at the end of the body section).";
li25.style.color = "green";
li25.classList.add("even");
const li26 = document.createElement("li");
li26.innerText = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).";
li26.style.color = "purple";
li26.classList.add("odd");
const li27 = document.createElement("li");
li27.innerText = "After you finish your work, submit it to the Github (2 points).";
li27.style.color = "green";
li27.classList.add("even");

ul2.appendChild(li21);
ul2.appendChild(li22);
ul2.appendChild(li23);
ul2.appendChild(li24);
ul2.appendChild(li25);
ul2.appendChild(li26);
ul2.appendChild(li27);
document.body.appendChild(ul2);

hr = document.createElement("hr");
document.body.appendChild(hr);

console.log(document);