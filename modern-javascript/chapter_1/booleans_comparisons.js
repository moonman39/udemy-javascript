// booleans & comparisons
console.log(true, false);

// methods can return booleans 
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@');
console.log(result); // true

result = names.includes('luigi');
console.log(result);

// comparison operators
let age = 25;

console.log(age == 25); // is age equal to 25? ... true
console.log(age != 30); // true


let name = 'shaun';

console.log(name == 'shaun'); // true
console.log(name == 'Shaun'); // false

console.log(name > 'crystal') // true - s comes later than c in the alphabet
// lowercase letters are also bigger than uppercase letters

console.log(name > 'Shaun'); // true;