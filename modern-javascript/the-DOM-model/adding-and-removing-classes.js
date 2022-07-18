/*

const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('error')
content.classList.remove('error')

content.classList.add('success');

*/


const paras = document.querySelectorAll('p');
console.log(paras);

// innerText gets us all the content thats visible, something bracketed by span wouldn't show up
paras.forEach(para => {
    if (para.textContent.includes('success')) {
        para.classList.add('success');
    } else if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
});


// how to toggle a class
const title = document.querySelector('.title');

title.classList.toggle('test'); // gives h1 the class
title.classList.toggle('test'); // removes the class from h1