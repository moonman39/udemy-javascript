// callbacks & foreach

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value) {
    console.log(value);
});

myFunc(value => console.log(value));



let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// .forEach expects a callback function
people.forEach(person => {
    let newName = person[0].toUpperCase() + person.substring(1, person.length);
    console.log(`This person is ${newName}.`);
})


const logPerson = (person) => {
    console.log(`hello ${person}`);
};

people.forEach(logPerson);