const form = document.querySelector('#contactForm');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');
const successMessage = document.querySelector('#successMessage');
const charCount = document.querySelector('#charCount');


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

message.addEventListener('input', () => {
    const count = message.value.length;
    charCount.textContent = `${count}/10000 characters`;
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    
    nameError.classList.remove('show');
    emailError.classList.remove('show');
    messageError.classList.remove('show');
    successMessage.classList.remove('show');

    
    if (fullName.value.trim() === '') {
        nameError.classList.add('show');
        isValid = false;
    }

    
    if (!emailPattern.test(email.value.trim())) {
        emailError.classList.add('show');
        isValid = false;
    }

    
    if (message.value.trim() === '') {
        messageError.classList.add('show');
        isValid = false;
    }

    
    if (isValid) {
        successMessage.classList.add('show');
        form.reset();
        charCount.textContent = '0/1000 characters';
    }
});