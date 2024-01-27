import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import awsmobile from 'scripts/aws-exports.js';
import { logInButton } from 'scripts/components/logInButton.js';
import { createAccountButton } from 'scripts/components/createAccountButton.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        Amplify.configure(awsmobile);
        const { username, userId, signInDetails } = await getCurrentUser();
        document.getElementById('auth-container').innerHTML = `
            <div class="auth-message-container" style="margin-top: 15%;">
                User logged in -> More coming soon.
            </div>
        `;

    } catch (err) {
        document.getElementById('auth-container').innerHTML = `
            <div class="auth-message-container" style="margin-top: 15%;">
                You must be logged in to access your puzzles.
            </div>
            <button class="auth-button" id="log-in">Log In</button>
            <div class="auth-input-container">
                <input type="text" id="email" placeholder="Email">
                <input type="password" id="password" placeholder="Password">
            </div>
            <button class="auth-button" id="create-account-page">Create account</button>
        `;

        document.getElementById('create-account-page').addEventListener('click', createAccountButton());
        document.getElementById('log-in').addEventListener('click', logInButton());
    };
    
});
