import { sudokuElements } from '/src/scripts/eventHandlers/eventManager.js';


export function deselectAllCells() {
    sudokuElements.cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });
}
