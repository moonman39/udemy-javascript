const para = document.querySelector('p');
console.log(para);

console.log(para.innerText);

para.innerText = 'this is the updated text';
console.log(para);

// appends the content
para.innerText += ' and the appended text';

// selecting and changing multiple
const newParas = document.querySelectorAll('p');
newParas.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' and newly updated';
})


// changing HTML
const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>this is a new h2</h2>'; // changes <p> content and makes it a new HTML
content.innerHTML += '<p> and I just added this body </p>';

// another example
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});




















