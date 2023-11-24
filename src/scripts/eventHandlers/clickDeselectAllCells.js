import { vars } from '/scripts/config.js';
import { deselectAllCells } from '/scripts/utils/deselectAllCells.js';


export function clickDeselectAllCells() {
    document.addEventListener('click', event => {
        if (!vars.sudokuGrid.contains(event.target)) {
            deselectAllCells();
        };
    });
};
