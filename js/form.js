const submitButton = document.querySelector('.submit-btn');
console.log(submitButton);

submitButton.addEventListener('click', function() {
    let emailButton = document.querySelector('.email-btn');
    let passwordButton = document.querySelector('.password-btn');
    let emailValue = emailButton.value;
    let passValue = passwordButton.value;
    // console.log(emailButton);
    // console.log(passwordButton);
    if (((emailValue).includes('@gmail.com')) && (passValue != '')) {
        window.location.href = 'bank.html';
    } else alert('valid Email is required');
    emailButton = '';
    emailValue = '';

})