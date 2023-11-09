import { vars } from '/src/scripts/config.js';
import { handleTextUpdate } from '/src/scripts/utils/handleTextUpdate.js';


export function updateCellText(cell, digit) {
    
    const symbolMarkers = cell.querySelectorAll('.symbol-marker');
    const symbolsFragment = document.createDocumentFragment();
    symbolMarkers.forEach(symbol => {
        symbolsFragment.appendChild(symbol.cloneNode(true));
        symbol.remove();
    });

    if (vars.isCenterText) {
        handleTextUpdate(cell, digit, 'center-text');
    } else if (vars.isCornerText) {
        handleTextUpdate(cell, digit, 'corner-text');
    } else {
        cell.textContent = digit;
        cell.classList.remove('center-text');
        cell.classList.remove('corner-text');
        cell.style.fontSize = '';
    };

    cell.appendChild(symbolsFragment);
};