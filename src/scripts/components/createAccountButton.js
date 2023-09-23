export function createAccountButton() {
    document.getElementById('create-account-page').addEventListener('click', () => {
        window.location.href = '/src/register.html';
    });
};
