import { authSignOut } from '../utils/authSignOut.js';


export function signOutButton() {
    document.getElementById('sign-out').addEventListener('click', authSignOut);
};