import { Amplify } from 'aws-amplify';
import { signUp } from 'aws-amplify/auth';
import awsmobile from 'scripts/aws-exports.js';



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-account').addEventListener('click', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            Amplify.configure(awsmobile);
            
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username: email,
                password,
                options: {
                    userAttributes: {
                        email
                    },
                    autoSignIn: true
                }
            });

            document.getElementById('registrationMessage').textContent = 'Registration successful! Check your email for verification.';
        } catch (error) {
            console.error('Error signing up:', error);
            document.getElementById('registrationMessage').textContent = error.message;
        }
    });
});
