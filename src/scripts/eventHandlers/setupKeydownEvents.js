import { sudokuElements } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/eventHandlers/highlightConflicts.js';


export function setupKeydownEvents() {
    document.addEventListener('keydown', (e) => {
        if (/[1-9]/.test(e.key)) {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                    highlightConflicts(e.key, cell);
                }
            });
            e.preventDefault();
        }
    });
};
