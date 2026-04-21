## Prompts

JavaScript is a high-level, interpreted programming language used to build interactive web applications. It runs in the browser and also on servers using Node.js.

Variables:
There are three ways to declare variables in JavaScript:
- var: function scoped (old, avoid using)
- let: block scoped
- const: block scoped and cannot be reassigned

Data Types:
JavaScript has dynamic typing. Common data types include:
- String
- Number
- Boolean
- Undefined
- Null
- Object
- Array

Functions:
Functions are reusable blocks of code. They can be declared using:
- function keyword
- arrow functions (=>)

Example:
function add(a, b) {
  return a + b;
}

Arrow function:
const add = (a, b) => a + b;

Closures:
A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.

Promises:
Promises are used for asynchronous operations. They have three states:
- Pending
- Resolved
- Rejected

Example:
fetch("api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

Async/Await:
Async/await is a cleaner way to handle promises.

Example:
async function fetchData() {
  try {
    const res = await fetch("api/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

DOM Manipulation:
JavaScript can modify HTML using DOM methods like:
- document.getElementById()
- document.querySelector()

Event Handling:
JavaScript can respond to user actions like clicks, typing, etc.

Example:
button.addEventListener("click", () => {
  console.log("Button clicked");
});