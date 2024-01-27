import { authSignUp } from './utils/authSignUp.js';
import { authConfirmSignUp } from './utils/authConfirmSignUp.js';


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-account').addEventListener('click', authSignUp);
    document.getElementById('verify-account').addEventListener('click', authConfirmSignUp);
});
