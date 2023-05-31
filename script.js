let age = "25";
let myName = "Steffi";

console.log(`Hello my name is ${myName} and I\'m ${age} years old.`);

let players=["Martin", "Thomas", "Peter", "Mathias", "Niki"];

console.log(players);

console.log(`The most valuable player of the match is ${players [2]}`)

// Intermediate E1
let autoBrand=["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(autoBrand.sort());

// Intermediate E2
let fruits=["apple", "banana", "kiwi"];
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

let animals=["monkey", "horse", "dog"];
animals.sort();
console.log(animals);
animals.unshift("cat");
console.log(animals);

// Intermediate E3
let fruits2="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
//fruits2.split("/");
fruits2 = fruits2.replaceAll("/", "<br>");
document.write(fruits2);
console.log(fruits2);

// Advanced E1
let a = "7";
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let sum=(a+b+c+d+e);
console.log(sum);

// Test
if (a > 100) {
    document.write("a is greater than 100")
 }
 else if(a==100){
   document.write("a is 100")
 }
  else {
    document.write("a is less than 100")
  }



















