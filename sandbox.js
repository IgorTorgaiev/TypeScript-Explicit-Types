// Explicit Types
var quantity;
var word;
var theInformation;
var number = 30;

// let number = 'Hello'; This is supposed to be mistake cause it's not a number

// A. Arrays
var people = [];
people.push('Igor', 'Torgaiev');
// people.push(false); This is a boolean and it's Not a string, therefore it's underline as a mistake
// people.push(30); This is also mistake as this is not a string
console.log(people);

// B. Objects
var firstPerson = {
    name: 'Igor', surname: 'Torgaiev', age: 30
};
var personTwo;
personTwo = {
    name: 'Igor',
    surname: 'Torgaiev',
    age: 30
};

// C. Union Types
var mixed = [];
mixed.push('Hello');
mixed.push(30);
// mixed.push(true); This is also mistake as mixed does not containt a boolean
console.log(mixed);
