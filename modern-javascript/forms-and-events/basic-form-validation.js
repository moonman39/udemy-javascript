const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');


form.addEventListener('submit', event => {
    event.preventDefault();
    // validation
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    const username = form.username.value;
    if (usernamePattern.test(username)) {
        feedback.textContent = 'That username is valid';
    } else {
        feedback.textContent = 'The username must be between 6-12 characters in length and only contain letters... bitch';
    }
})