import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';
import { adjustColorDivSizes } from '/src/scripts/utils/adjustColorDivSizes.js';


export function updateCellColor(cell, digit) {
    if (cell.querySelector(`.colour-${digit}`)) {
        removeColoursFromCell(cell, digit);
    } else {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('colour-text', `colour-${digit}`);
        cell.appendChild(colorDiv);
        adjustColorDivSizes(cell);
    }
};