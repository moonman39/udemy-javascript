let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25); // true
console.log(age == '25'); // true, converts '25' into a number before it evaluates it

// stric comparison (different tpes cannot be equal)

console.log(age === 25); // true
console.log(age === '25'); // false