let score = '100';
console.log(score + 1); // 1001

score = Number(score);
console.log(score + 1) // 101;
console.log(typeof score); // number


let result = 'hello';
result = Number(result);
console.log(result); NaN

// Number into a string
result = '50';
result= String(result);
console.log(result); // 50
console.log(typeof result); // string

// Convert into a boolean
let newResult = Boolean(0);
console.log(newResult, typeof newResult); // false "boolean"

newResult = Boolean('0');
console.log(newResult, typeof newResult); // true "boolean"
