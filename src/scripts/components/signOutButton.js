import { signOut } from 'aws-amplify/auth';


export function signOutButton() {
    document.getElementById('sign-out').addEventListener('click', authSignOut);
};


async function authSignOut(event) {
    event.preventDefault();

    try {
        await signOut();
        document.getElementById('registrationMessage').textContent = 'Signout successful!';
        document.querySelectorAll('.my-puzzles-button, .create-puzzle-button').forEach(button => {
            button.classList.add('disabled');
        });
    } catch (error) {
        console.log('Error signing out: ', error);
        document.getElementById('registrationMessage').textContent = error.message;
    };
};  