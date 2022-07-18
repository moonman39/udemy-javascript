// create a reference to button
const button = document.querySelector('button');

// create an event listener for the popup
const popup = document.querySelector('.popup-wrapper');
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

// create an event listener for the close button
const close = document.querySelector('.popup-close');
close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})