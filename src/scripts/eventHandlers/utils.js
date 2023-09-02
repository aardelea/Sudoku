import { cells } from '/src/scripts/eventHandlers/eventManager.js';


export function deselectAllCells() {
    cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });
}
