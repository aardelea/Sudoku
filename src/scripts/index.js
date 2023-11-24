import { proceedAsGuestButton } from '/scripts/components/proceedAsGuestButton.js';
import { logInButton } from '/scripts/components/logInButton.js';
import { createAccountButton } from '/scripts/components/createAccountButton.js';


document.addEventListener('DOMContentLoaded', () => {
    proceedAsGuestButton();
    logInButton();
    createAccountButton();
});