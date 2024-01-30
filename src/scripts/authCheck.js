import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

import awsmobile from 'scripts/aws-exports.js';
import { logInButton } from 'scripts/components/logInButton.js';
import { signOutButton } from 'scripts/components/signOutButton.js';
import { createAccountButton } from 'scripts/components/createAccountButton.js';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        Amplify.configure(awsmobile);
        const { idToken } = (await fetchAuthSession()).tokens ?? {};
        const authMessage = `<div class="auth-message-container">Welcome back, ${idToken.payload.email}!</div> <button class="auth-button" id="sign-out">Sign out</button><p id="registrationMessage"></p>`;
        renderAuthContainer(authMessage);

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
        renderAuthContainer(notLoggedInMessage);
    };
    
});


function renderAuthContainer(content) {
    try{
        const authContainer = document.getElementById('auth-container');
        authContainer.innerHTML = content;
        attachEventListeners();
    } catch (err) {
        console.log(err)
    };
};


function attachEventListeners() {
    const authContainer = document.getElementById('auth-container');

    authContainer.addEventListener('mousedown', function(event) {
        if (event.target.id === 'log-in') {
            logInButton();
        } else if (event.target.id === 'create-account-page') {
            createAccountButton();
        }  else if (event.target.id === 'sign-out') {
            signOutButton();
        };
        
    });
};