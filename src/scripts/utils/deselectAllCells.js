import { vars } from '/src/scripts/config.js';


export function deselectAllCells() {
    let lastActiveCell = vars.cell;

    vars.cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });

    if (vars.keypadButtonClicked && lastActiveCell) {
        lastActiveCell.classList.add('clicked');
        vars.keypadButtonClicked = false;
    };
};
