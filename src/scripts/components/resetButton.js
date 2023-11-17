import { vars } from '/src/scripts/config.js';
import { removeExistingConflictHighlights } from '/src/scripts/utils/removeExistingConflictHighlights.js';
import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';


export function resetButton() {
    vars.resetButton.addEventListener('click', () => {
        removeExistingConflictHighlights();
        vars.cells.forEach(cell => {

            if (!cell.classList.contains('fixed') || vars.puzzleStartingPosition) {
                cell.querySelector('.digit-text').textContent = '';
                cell.querySelectorAll('.center-text').forEach(span => span.remove());
                cell.querySelectorAll('.corner-text').forEach(span => span.remove());
                cell.classList.remove('corner-text', 'center-text', 'user-digit', 'fixed');
            };

            removeColoursFromCell(cell);
        });
    });
};
