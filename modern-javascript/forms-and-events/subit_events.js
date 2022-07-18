const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', event => {
    event.preventDefault(); // prevents the default action; in this case, the browser by default refreshes the page
    // console.log(username.value);
    console.log(form.username.value);
})

