import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function deleteButton() {
    document.getElementsByClassName('keypad-delete')[0].addEventListener('click', () => {
        vars.cells.forEach(cell => {
            if (cell.classList.contains('clicked') && cell.classList.contains('user-digit')) {
                cell.textContent = '';
                cell.classList.remove('user-digit');
                highlightConflicts();
            };
        });
    });
};
