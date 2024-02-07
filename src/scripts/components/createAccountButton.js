export function createAccountButton() {
    const createAccButton = document.getElementById('create-account-page');
    if (createAccButton) {
        createAccButton.addEventListener('click', () => {
            window.location.href = '/register.html';
        });
    };
};
