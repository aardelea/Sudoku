import { vars } from '/src/scripts/config.js';
import { deselectAllCells } from '/src/scripts/utils/deselectAllCells.js';
import { removeSharedEdges } from '/src/scripts/utils/removeSharedEdges.js';


export function mouseDown() {
    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('cell')) {
            vars.isMouseDown = true;

            if (e.target === vars.cell && e.target.classList.contains('clicked')) {
                deselectAllCells();
                return;
            } 
            
            if (!vars.ctrlOrShiftPressed) {
                deselectAllCells();
            }

            e.target.classList.add('clicked');
            e.target.focus();
            removeSharedEdges();

            vars.cell = e.target;
        }
    });
}


export function updateMostRecentActiveCell() {
    vars.cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            if (vars.cell !== cell) {
                vars.cell = cell;
            }
        });
    });
}