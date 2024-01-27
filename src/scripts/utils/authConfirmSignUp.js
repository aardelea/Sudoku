import { confirmSignUp } from 'aws-amplify/auth';


export async function authConfirmSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('email').value;
    const confirmationCode = document.getElementById('verification-code').value;

    try {
        await confirmSignUp({
            username,
            confirmationCode
        });
        document.getElementById('registrationMessage').textContent = 'Account verified! Redirecting...';
        setTimeout(() => {
            window.location.href = '/home.html';
        }, 2000); // Redirect after 2 seconds
    } catch (error) {
        console.error('Error verifying account:', error);
        document.getElementById('registrationMessage').textContent = error.message;
    }
}