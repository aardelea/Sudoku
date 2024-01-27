import { authLogin } from '../utils/authLogin.js';


export function logInButton() {
    document.getElementById('log-in').addEventListener('click', authLogin);
};