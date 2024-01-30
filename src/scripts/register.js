
import { Amplify } from 'aws-amplify';
import { signUp } from 'aws-amplify/auth';
import { confirmSignUp } from 'aws-amplify/auth';

import awsmobile from 'scripts/aws-exports.js';


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-account').addEventListener('click', authSignUp);
    document.getElementById('verify-account').addEventListener('click', authConfirmSignUp);
});


async function authSignUp(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        Amplify.configure(awsmobile);
        
        const { userConfirmed  } = await signUp({
            username: email,
            password,
            options: {
                userAttributes: {
                    email
                },
                autoSignIn: true
            }
        });

        if (!userConfirmed) {
            document.getElementById('verification-section').style.display = 'flex';
        }

        document.getElementById('registrationMessage').textContent = 'Check your email for a verification code to complete registration.';
    } catch (error) {
        console.error('Error signing up:', error);
        document.getElementById('registrationMessage').textContent = error.message;
    };
};


async function authConfirmSignUp(event) {
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
    };
};