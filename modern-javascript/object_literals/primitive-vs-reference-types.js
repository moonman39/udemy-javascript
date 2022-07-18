// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

let userOne = {
    name: 'ryu',
    age: 30
};
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'grant';
console.log(userTwo); // will be different value even though we didn't explicitely change the value of userTwo