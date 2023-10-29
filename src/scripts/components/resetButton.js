import { vars } from '/src/scripts/config.js';
import { removeExistingConflictHighlights } from '/src/scripts/utils/removeExistingConflictHighlights.js';


export function resetButton() {
    vars.resetButton.addEventListener('click', () => {
        removeExistingConflictHighlights();
        vars.cells.forEach(cell => {
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            };
        });
    });
};
