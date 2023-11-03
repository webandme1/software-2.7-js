const person = require("./person"); //Objects can be created from the exported module.
const {name, age} = require("./person"); //Destructuring can also be done
const greetFromModule = require("./action");

console.log(person.name);
console.log(age);
greetFromModule("Alice");