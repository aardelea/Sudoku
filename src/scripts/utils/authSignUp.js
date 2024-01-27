import { Amplify } from 'aws-amplify';
import { signUp } from 'aws-amplify/auth';
import awsmobile from 'scripts/aws-exports.js';


export async function authSignUp(event) {
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