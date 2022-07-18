// copy
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    alert('OI! my content is copyright');
});

// mousemove
const box = document.querySelector('.box');
box.addEventListener('mousemove', event => {
    console.log(event);
    console.log(event.offsetX, event.offsetY);
    box.textContent = `The x position is ${event.offsetX}.  The y position is ${event.offsetY}.`;
});

// wheel event
document.addEventListener('wheel', event => {
    console.log(event);
    console.log(event.pageX, event.pageY);
})



