import { signIn } from 'aws-amplify/auth';


export function logInButton() {
    document.getElementById('log-in').addEventListener('click', authLogin);
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
        setTimeout(() => {
            window.location.href = '/home.html';
        }, 1000); // Redirect after 2 seconds
    } catch (error) {
        console.error('Error signing in:', error);
        document.getElementById('registrationMessage').textContent = error.message;
    };
};