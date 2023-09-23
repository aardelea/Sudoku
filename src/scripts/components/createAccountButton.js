export function createAccountButton() {
    document.getElementById('create-account').addEventListener('click', () => {
        window.location.href = '/src/register.html';
    });
};
