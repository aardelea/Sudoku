import { buttons, sudokuElements } from '/src/scripts/config.js';


export function resetButton() {
    buttons.resetButton.addEventListener('click', () => {
        sudokuElements.cells.forEach(cell => {
            cell.classList.remove('conflict-highlighted');
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            };
        });
    });
};
