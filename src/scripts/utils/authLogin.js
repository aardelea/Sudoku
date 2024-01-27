import { signIn } from 'aws-amplify/auth';


export async function authLogin(event) {
    event.preventDefault();

    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        await signIn({
            username: email,
            password,
        });
        document.getElementById('registrationMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = '/home.html';
        }, 2000); // Redirect after 2 seconds
    } catch (error) {
        console.error('Error signing in:', error);
        document.getElementById('registrationMessage').textContent = error.message;
    };
};
