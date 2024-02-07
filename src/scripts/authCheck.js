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

        if (!['/my-puzzles.html', '/setter-mode.html'].includes(window.location.pathname)) {
            const authMessage = `<div class="auth-message-container">Welcome back, ${idToken.payload.email}!</div> <button class="auth-button" id="sign-out">Sign out</button><p id="registrationMessage"></p>`;
            renderAuthContainer(authMessage);
        } else {
            document.getElementById('content-container').style.display = 'flex';
        }

    } catch (err) {
        console.log("Not logged in");
        let notLoggedInMessage = "";

        if (!['/my-puzzles.html', '/setter-mode.html'].includes(window.location.pathname)) {            
            notLoggedInMessage = `
                <button class="auth-button" id="log-in">Log In</button>
                <div class="auth-input-container">
                    <input type="text" id="email" placeholder="Email">
                    <input type="password" id="password" placeholder="Password">
                    <p id="registrationMessage"></p>
                </div>
                <button class="auth-button" id="create-account-page">Create account</button>
            `;
            
        } else {
            document.getElementById('content-container').style.display = 'none';
            notLoggedInMessage = `
                <div class="auth-message-container" style="margin-top: 20%;">
                    You must be logged in to access this section.
                </div>
            `;
        };
        renderAuthContainer(notLoggedInMessage);
        
    };
    
});


function renderAuthContainer(content) {
    try{
        if(document.getElementById('auth-container')){
            document.getElementById('auth-container').innerHTML = content;
            document.getElementById('auth-container').addEventListener('mousedown', function(event) {
                if (event.target.id === 'log-in') {
                    logInButton();
                } else if (event.target.id === 'create-account-page') {
                    createAccountButton();
                }  else if (event.target.id === 'sign-out') {
                    signOutButton();
                };
            });
        };
    } catch (err) {
        console.log(err)
    };
};