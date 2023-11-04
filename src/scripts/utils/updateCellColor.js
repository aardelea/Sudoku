import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';


export function updateCellColor(cell, digit) {
    removeColoursFromCell(cell);
    cell.classList.add(`colour-${digit}`);
    cell.classList.add('colour-text');
};