import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

import awsmobile from 'scripts/aws-exports.js';
import { logInButton } from 'scripts/components/logInButton.js';
import { createAccountButton } from 'scripts/components/createAccountButton.js';
import { proceedAsGuestButton } from 'scripts/components/proceedAsGuestButton.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        Amplify.configure(awsmobile);
        const { idToken } = (await fetchAuthSession()).tokens ?? {};

        const authMessage = `<div class="auth-message-container" style="margin-top: 15%;">Welcome back, ${idToken.payload.email}!</div>`;
        
        if (window.location.pathname === '/my-puzzles.html') {
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
            renderAuthContainer(`<div class="auth-message-container" style="margin-top: 15%;">You must be logged in to access your puzzles.</div>` + notLoggedInMessage);
        } else {
            renderAuthContainer(`<button class="landing-button" id="guest-login">Proceed as Guest</button>` + notLoggedInMessage);
        };
        attachEventListeners();
    };
    
});


function renderAuthContainer(content) {
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = content;
};


function attachEventListeners() {
    const guestLoginBtn = document.getElementById('guest-login');
    const loginBtn = document.getElementById('log-in');
    const createAccountBtn = document.getElementById('create-account-page');

    if (guestLoginBtn) guestLoginBtn.addEventListener('click', proceedAsGuestButton);
    if (loginBtn) loginBtn.addEventListener('click', logInButton);
    if (createAccountBtn) createAccountBtn.addEventListener('click', createAccountButton);
};