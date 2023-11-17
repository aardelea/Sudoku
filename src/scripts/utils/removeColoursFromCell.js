import { adjustColorDivSizes } from '/src/scripts/utils/adjustColorDivSizes.js';


export function removeColoursFromCell(cell, digit) {
    if (digit !== undefined) {
        cell.removeChild(cell.querySelector(`.colour-${digit}`));
    } else {
        for (let i = 0; i <= 9; i++) {
            const colorDiv = cell.querySelector(`.colour-${i}`);
            if (colorDiv) {
                cell.removeChild(colorDiv);
            };
        };
    };
    adjustColorDivSizes(cell);
};