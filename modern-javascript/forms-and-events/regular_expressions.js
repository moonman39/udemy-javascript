const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', event => {
    event.preventDefault(); // prevents the default action; in this case, the browser by default refreshes the page
    // console.log(username.value);
    console.log(form.username.value);
})

// testing RegEx
const username = 'shauan';
const pattern = /^[a-z]{6,}$/;

// let result = username.search(pattern); // returns an integer; -1 if there's not a match or else the position of the match
let result = pattern.test(username);


if (result) {
    console.log('regex test passed');
} else {
    console.log('regex test failed')
}


