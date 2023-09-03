import { sudokuElements } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/eventHandlers/highlightConflicts.js';


export function setupDeleteButton() {
    document.getElementsByClassName('keypad-delete')[0].addEventListener('click', () => {
        sudokuElements.cells.forEach(cell => {
            if (cell.classList.contains('clicked') && cell.classList.contains('user-digit')) {
                cell.textContent = '';
                cell.classList.remove('user-digit');
                highlightConflicts();
            };
        });
    });
};
