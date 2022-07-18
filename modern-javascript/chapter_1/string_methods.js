// Command + / creates comments automatically

let email = 'mario@thenetninja.co.uk';

console.log(email.slice(0, 5));
// mario

console.log(email.lastIndexOf('@'));
// 5


// Different from .slice() in that the second parameter is the number of characters to extract from the starting point
let result = email.substr(4, 10);
console.log(result);


// Only replaces the first instance, not multiples
let newResult = email.replace('n', 'w'); 
console.log(newResult); // mario@thewetninja.co.uk


// Template Strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//  concatenation way
let sentence = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(sentence);

// template string way
let newSentence = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(newSentence);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html);