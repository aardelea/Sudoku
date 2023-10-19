import { vars } from '/src/scripts/config.js';
import { removeSharedEdges } from '/src/scripts/utils/removeSharedEdges.js';


export function mouseOver() {
    vars.cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (vars.isMouseDown) {
                cell.classList.add('clicked');
                removeSharedEdges();
            };
        });
    });
};
