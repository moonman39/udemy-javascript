// remove element from the DOM
/* 
const ul = document.querySelector('ul');
ul.remove(); 
*/

const ul = document.querySelector('ul');

const items = document.querySelectorAll('li');



// adding elements


const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li); // puts it at the bottom of the parent
    ul.prepend(li); // puts it at the top of the parent
});

items.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.remove();
    })
});


