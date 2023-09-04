import { vars } from '/src/scripts/config.js';


export function clickEditMode() {
    vars.sudokuGrid.addEventListener('click', (event) => {
        const clickedCell = event.target;
        if (!clickedCell.classList.contains('fixed')) {
            clickedCell.focus();
        };
    });
};
