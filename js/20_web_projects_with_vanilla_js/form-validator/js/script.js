const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// SHOW INPUT ERROR MESSAGE
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-controll error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// SHOW INPUT SUCCESS OUTLINE
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// EVENT LISTENERS
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username === '' ) {
        showError(username, 'Username is required');
    } else {
        showSuccess(username)
    }



    console.log(username.value);
    console.log('submit');
});