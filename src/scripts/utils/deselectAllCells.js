import { vars } from '/src/scripts/config.js';


export function deselectAllCells() {
    vars.cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });
};
