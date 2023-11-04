import { vars } from '/src/scripts/config.js';
import { removeExistingConflictHighlights } from '/src/scripts/utils/removeExistingConflictHighlights.js';


export function resetButton() {
    vars.resetButton.addEventListener('click', () => {
        removeExistingConflictHighlights();
        vars.cells.forEach(cell => {
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
                cell.classList.remove('corner-text');
                cell.classList.remove('center-text');
            };

            cell.classList.remove('colour-text');
            for (let digit = 0; digit <= 10; digit++) {
                cell.classList.remove(`colour-${digit}`);
            }
        });
    });
};
