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
        resetButton.classList.add('reset-button-active');

        resetButton.addEventListener('animationend', function() {
            resetButton.classList.remove('reset-button-active');
        }, {once: true});
    });
}
