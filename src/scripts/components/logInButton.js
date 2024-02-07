import { signIn } from 'aws-amplify/auth';


export function logInButton() {
    const logInButton = document.getElementById('log-in');
    if (logInButton) {
        logInButton.addEventListener('click', authLogin);
    };
};


async function authLogin(event) {
    event.preventDefault();

    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        await signIn({
            username: email,
            password,
        });
        document.getElementById('registrationMessage').textContent = 'Login successful!';
    } catch (error) {
        console.error('Error signing in:', error);
        document.getElementById('registrationMessage').textContent = error.message;
    };
};