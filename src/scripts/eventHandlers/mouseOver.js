import { vars } from '/src/scripts/config.js';


export function mouseOver() {
    vars.cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (vars.isMouseDown) {
                cell.classList.add('clicked');
            };
        });
    });
};
