export function proceedAsGuestButton() {
    document.getElementById('guest-login').addEventListener('click', () => {
        window.location.href = '/src/grid.html';
    });
};