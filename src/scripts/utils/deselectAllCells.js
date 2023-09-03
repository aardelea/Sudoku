import { sudokuElements } from '/src/scripts/config.js';


export function deselectAllCells() {
    sudokuElements.cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });
};
