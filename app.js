// Datatype
let str = "Hello";    // String
let num = 100;        // Number
let isActive = true;  // Boolean
let arr = [1, 2, 3];  // Array
let obj = { name: "Alice", age: 30 }; // Object

console.log(typeof str, typeof num, typeof isActive);



// Functions
function greet(Mayur) {
    return "Hello," + Mayur;
}
console.log(greet("Mayur"))

const add = (a, b) => a + b;
console.log(add(5,10));



// Loops
// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", 1);
}
// while loop
let x = 1;
while (x <= 5) {
    console.log("White:", x);
    x++;
}



// Objects
const user = { name: "Mayur", age: 20, isAdmin: true };
console.log(user.name, user.age);

// Array
const colors = ["Red", "Green", "Blue"];
console.log(colors[0]);



// Asynchronous JavaScript (Promises & Async/Await)
// Simulating a delay using setTimeout
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received!");
    }, 3000);
});

fetchData.then((data) => console.log(data));

// Async/Await
async function getData() {
    let response = await fetchData;
    console.log(response);
}
getData();

console.log("Hello, this is my first JavaScript program!");
console.log("The type of 42 is:", typeof 42);
console.log("The type of 'Hello' is:", typeof "Hello");


let name = "Mayur";
let age = 20;
console.log("User name is:", name);
console.log("User age is:", age);
console.log("Data type of age:", typeof age);

