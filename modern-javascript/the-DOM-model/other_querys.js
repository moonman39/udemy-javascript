// get an element by ID
const title = document.getElementById("page-title"); // don't need #, implied by getElementID - would need it using querySelector
console.log(title);


// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[1]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[2]);