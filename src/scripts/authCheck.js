import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

import awsmobile from 'scripts/aws-exports.js';
import { logInButton } from 'scripts/components/logInButton.js';
import { signOutButton } from 'scripts/components/signOutButton.js';
import { createAccountButton } from 'scripts/components/createAccountButton.js';
import { proceedAsGuestButton } from 'scripts/components/proceedAsGuestButton.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        Amplify.configure(awsmobile);
        const { idToken } = (await fetchAuthSession()).tokens ?? {};

        const authMessage = `<div class="auth-message-container">Welcome back, ${idToken.payload.email}!</div> <button class="auth-button" id="sign-out">Sign out</button><p id="registrationMessage"></p>`;
        
        if (window.location.pathname === '/my-puzzles.html') {
            renderAuthContainer(authMessage);
        } else if (window.location.pathname === '/home.html') {
            renderAuthContainer(authMessage);
        } else {
            renderAuthContainer(authMessage + `<button class="landing-button" id="guest-login">Continue</button>`);
            attachEventListeners();
        };

    } catch (err) {
        const notLoggedInMessage = `
            <button class="auth-button" id="log-in">Log In</button>
            <div class="auth-input-container">
                <input type="text" id="email" placeholder="Email">
                <input type="password" id="password" placeholder="Password">
                <p id="registrationMessage"></p>
            </div>
            <button class="auth-button" id="create-account-page">Create account</button>
        `;

        if (window.location.pathname === '/my-puzzles.html') {
            renderAuthContainer(`<div class="auth-message-container"">You must be logged in to access your puzzles.</div>` + notLoggedInMessage);
        } else if (window.location.pathname === '/home.html') {
            renderAuthContainer(notLoggedInMessage);
        } else {
            renderAuthContainer(`<button class="landing-button" id="guest-login">Proceed as Guest</button>` + notLoggedInMessage);
        };
        attachEventListeners();
    };
    
});


function renderAuthContainer(content) {
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = content;
    attachEventListeners();
};


function attachEventListeners() {
    const authContainer = document.getElementById('auth-container');

    authContainer.addEventListener('mousedown', function(event) {
        if (event.target.id === 'guest-login') {
            proceedAsGuestButton();
        } else if (event.target.id === 'log-in') {
            logInButton();
        } else if (event.target.id === 'create-account-page') {
            createAccountButton();
        }  else if (event.target.id === 'sign-out') {
            signOutButton();
        };
        
    });
};