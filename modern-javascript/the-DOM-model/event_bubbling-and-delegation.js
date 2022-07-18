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
    ul.append(li); // puts it at the bottom of the parent
    // ul.prepend(li); // puts it at the top of the parent
});

// event bubbling

/* 
items.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log('event in li')
        event.target.remove();
        event.stopPropagation(); // stops the event from bubbling up to the parent element
    })
});

*/

// unless you use .stopPropogation(), this event will trigger as well due to bubbling
ul.addEventListener('click', event => {
    // console.log(('event in ul'));
    console.log(event.target);
    if (event.target.tagName === 'LI') {
        event.target.remove();
    };
})

