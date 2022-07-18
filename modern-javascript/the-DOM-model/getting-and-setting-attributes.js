const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
console.log(link);
link.innerText = 'The Net Ninja Website';


// useful in the case of someone filling out a form - if unsuccessful, change class to error (which triggers color change to red)
const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');

// adding an attribute that doesn't yet exist
message.setAttribute('style', 'color: green');


const title = document.querySelector('h1');
title.setAttribute('style', 'margin: 50px;'); // overrides previous change

console.log(title.style);
console.log(title.style.margin);

title.style.color = 'green';
title.style.fontSize = '60px'; // must use camel case because ' - ' is seen as subtraction 

title.style.margin = ''; // deletes a property