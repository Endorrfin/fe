const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');



// SHOW INPUT ERROR MESSAGE
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// SHOW SUCCESS OUTLINE
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// CHECK EMAIL IS VALID
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// CHECK REQUIRED FIELDS
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            // console.log(input.id);
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }
        console.log(input);
        console.log(input.value);
    })

    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username)
    // }
    //
    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, "Email is not valid")
    // } else {
    //     showSuccess(email)
    // }
    //
    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password)
    // }
    //
    // if (confirmPassword.value === '') {
    //     showError(confirmPassword, 'Confirm password is required');
    // } else {
    //     showSuccess(confirmPassword)
    // }
}

// GET FIELD NAME
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log('submit');
    // console.log(username);
    // console.log(username.value);

    checkRequired([username, email, password, confirmPassword]);
});
