const form = document.getElementById('leadform');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value;

    if (validateEmail(email)) {
        message.textContent = 'E-mail cadastrado com sucesso!';
        message.style.color = 'green';
        emailInput.value;
    } else {
        message.textContent = 'Por favor, insira um e-mail válido.'
        message.style.color = 'red';
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}