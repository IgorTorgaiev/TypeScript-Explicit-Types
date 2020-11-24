// Explicit Types

let quantity: number; 
let word: string;
let theInformation: boolean;


let number = 30;
// let number = 'Hello'; This is supposed to be mistake cause it's not a number

// A. Arrays

let people:string[]=[];
people.push('Igor', 'Torgaiev');

// people.push(false); This is a boolean and it's Not a string, therefore it's underline as a mistake
// people.push(30); This is also mistake as this is not a string
console.log(people);


// B. Objects

let firstPerson = {
    name: 'Igor', surname: 'Torgaiev', age: 30
};

let personTwo: {
    name: string,
    surname: string,
    age: number
}

personTwo = {
    name: 'Igor', 
    surname: 'Torgaiev', 
    age: 30
}

// C. Union Types

let mixed:(string|number) []=[];
mixed.push('Hello');
mixed.push(30);
// mixed.push(true); This is also mistake as mixed does not containt a boolean
console.log(mixed);