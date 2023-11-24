import { vars } from '/scripts/config.js';


export function deselectAllCells() {
    let activeCells = Array.from(vars.cells).filter(cell => cell.classList.contains('clicked'));

    vars.cells.forEach(cell => {
        cell.classList.remove('clicked');
    });

    if (vars.buttonClicked) {
        activeCells.forEach(cell => {
            cell.classList.add('clicked');
        });
        vars.buttonClicked = false;
    };
};