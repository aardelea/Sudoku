import { proceedAsGuestButton } from '/src/scripts/components/proceedAsGuestButton.js';
import { logInButton } from '/src/scripts/components/logInButton.js';
import { createAccountButton } from '/src/scripts/components/createAccountButton.js';


document.addEventListener('DOMContentLoaded', () => {
    proceedAsGuestButton();
    logInButton();
    createAccountButton();
});
