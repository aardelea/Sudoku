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
        cell.querySelector('.digit-text').textContent = digit;
        cell.style.fontSize = '';
        cell.querySelectorAll('.center-text').forEach(span => span.remove());
        cell.querySelectorAll('.corner-text').forEach(span => span.remove());
        cell.classList.remove('center-text', 'corner-text');
    };

    cell.appendChild(symbolsFragment);
};