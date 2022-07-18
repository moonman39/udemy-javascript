const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


/* form.addEventListener('submit', event => {
    event.preventDefault();
    // validation
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    const username = form.username.value;
    if (usernamePattern.test(username)) {
        feedback.textContent = 'That username is valid';
    } else {
        feedback.textContent = 'The username must be between 6-12 characters in length and only contain letters';
    }
})

*/

// live feedback
form.username.addEventListener('keyup', event => {
    // console.log(event.target.value);
    if (usernamePattern.test(event.target.value)) {
        feedback.innerHTML = 'username is accepted';
        form.username.setAttribute('class', 'success');
    } else {
        feedback.innerHTML = 'username not valid...yet';
        form.username.setAttribute('class', 'error');
    }
})