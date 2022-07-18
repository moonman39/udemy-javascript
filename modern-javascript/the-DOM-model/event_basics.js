const button = document.querySelector('button');

button.addEventListener('click', () => {
    alert('you clicked me');
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (event) => { // this callback function saves the info into event
        // console.log(event.target.innerText); // the actual content of the list
        event.target.style.textDecoration = 'line-through';
    });
});


