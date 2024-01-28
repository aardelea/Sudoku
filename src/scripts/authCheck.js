import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import awsmobile from 'scripts/aws-exports.js';
import { logInButton } from 'scripts/components/logInButton.js';
import { createAccountButton } from 'scripts/components/createAccountButton.js';
import { proceedAsGuestButton } from 'scripts/components/proceedAsGuestButton.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        Amplify.configure(awsmobile);
        const currentUser = await getCurrentUser();
        const email = currentUser.signInDetails.loginId;
        
        if (window.location.pathname === '/my-puzzles.html') {
            document.getElementById('auth-container').innerHTML = `
                <div class="auth-message-container" style="margin-top: 15%;">
                    Welcome back, ${email}!
                </div>
            `;
        } else {
            document.getElementById('auth-container').innerHTML = `
                <div class="auth-message-container" style="margin-top: 15%;">
                    Welcome back, ${email}!
                </div>
                <button class="landing-button" id="guest-login">Continue</button>
            `;
            document.getElementById('guest-login').addEventListener('click', proceedAsGuestButton);
        };

    } catch (err) {
        if (window.location.pathname === '/my-puzzles.html') {
            document.getElementById('auth-container').innerHTML = `
                <div class="auth-message-container" style="margin-top: 15%;">
                    You must be logged in to access your puzzles.
                </div>
                <button class="auth-button" id="log-in">Log In</button>
                <div class="auth-input-container">
                    <input type="text" id="email" placeholder="Email">
                    <input type="password" id="password" placeholder="Password">
                    <p id="registrationMessage"></p>
                </div>
                <button class="auth-button" id="create-account-page">Create account</button>
            `;
            document.getElementById('create-account-page').addEventListener('click', createAccountButton);
            document.getElementById('log-in').addEventListener('click', logInButton);
            
        } else {
            document.getElementById('auth-container').innerHTML = `
                <button class="landing-button" id="guest-login">Proceed as Guest</button>
                <button class="auth-button" id="log-in">Log In</button>
                <div class="auth-input-container">
                    <input type="text" id="email" placeholder="Email">
                    <input type="password" id="password" placeholder="Password">
                    <p id="registrationMessage"></p>
                </div>
                <button class="auth-button" id="create-account-page">Create account</button>
            `;
            document.getElementById('guest-login').addEventListener('click', proceedAsGuestButton);
            document.getElementById('create-account-page').addEventListener('click', createAccountButton);
            document.getElementById('log-in').addEventListener('click', logInButton);
        };
    };
    
});
