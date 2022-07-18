// Used to store collections of things in, e.g. strings, numbers, etc.

let ninjas = ['shawn', 'ryu', 'chun-li'];

console.log(ninjas);

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

// Can store different types of data
let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// Have properties and methods like strings & numbers

console.log(ninjas.length);

// Array Methods

let result = ninjas.join(', ');
console.log(result); // shawn, ken, chun-li

let newResult = ninjas.indexOf('chun-li');
console.log(newResult); // 2

let concatArr = ninjas.concat(['ryu', 'crystal']);
console.log(concatArr); // ['shawn', 'ken', 'chun-li', 'ryu', 'crystal']


// Destructive method - changes original value
let pushedArr = ninjas.push('grant');
console.log(pushedArr); // 4 - .push returns the length of the array

let poppedArr = ninjas.pop();
console.log(poppedArr) // ['shawn', 'ken', 'chun-li']