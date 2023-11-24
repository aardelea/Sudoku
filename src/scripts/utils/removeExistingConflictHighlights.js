import { vars } from '/scripts/config.js';


export function removeExistingConflictHighlights() {
    vars.cells.forEach(cell => {
        cell.classList.remove('conflict-highlighted');
        Array.from(cell.childNodes).forEach(child => {
            if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text'))) {
                child.classList.remove('conflict-highlighted-pmark');
            };
        });
    });
};