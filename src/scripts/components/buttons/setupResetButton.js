export let resetButton = document.getElementById('reset-button');

export function setupResetButton() {
    resetButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('conflict-highlighted');
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            }
        });
        resetButton.classList.add('active');

        setTimeout(() => {
            resetButton.classList.remove('active');
        }, 100);
    });
}
