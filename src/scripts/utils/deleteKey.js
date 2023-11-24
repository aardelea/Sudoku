import { vars } from '/scripts/config.js';
import { highlightConflicts } from '/scripts/utils/highlightConflicts.js';
import { removeColoursFromCell } from '/scripts/utils/removeColoursFromCell.js';


export function deleteKey() {
    vars.actionID++;
    const entriesToDelete = [];
    
    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked')) {
            const xMarkers = cell.querySelectorAll('.symbol-marker');
            const hasFixedDigitsOrSymbols = xMarkers.length > 0 || cell.classList.contains('fixed');
            const hasUserDigits = cell.classList.contains('user-digit');
            const hasColours = Array.from(cell.querySelectorAll('div')).some(div => div.classList.contains('colour-text'));
            
            if (vars.isColourText && hasColours) {
                removeColoursFromCell(cell);
            } else if (hasFixedDigitsOrSymbols && vars.puzzleStartingPosition) {
                xMarkers.forEach(xMarker => cell.removeChild(xMarker)); 

                entriesToDelete.push({
                    cell: cell,
                    prevContent: cell.innerHTML,
                    actionID: vars.actionID
                });

                cell.querySelector('.digit-text').textContent = '';
                cell.style.fontSize = '';
                cell.querySelectorAll('.center-text').forEach(span => span.remove());
                cell.querySelectorAll('.corner-text').forEach(span => span.remove());
                cell.classList.remove('fixed');
                highlightConflicts('', cell);

            } else if (hasUserDigits && !vars.puzzleStartingPosition){
                const symbolsFragment = document.createDocumentFragment();
                xMarkers.forEach(symbol => {
                    symbolsFragment.appendChild(symbol.cloneNode(true));
                    symbol.remove();
                });
                cell.querySelector('.digit-text').textContent = '';
                cell.style.fontSize = '';
                cell.querySelectorAll('.center-text').forEach(span => span.remove());
                cell.querySelectorAll('.corner-text').forEach(span => span.remove());
                cell.classList.remove('user-digit');
                cell.appendChild(symbolsFragment);
                highlightConflicts('', cell);
            } else if (hasColours) {
                removeColoursFromCell(cell);
            };
        };
    });

    vars.undoHistory.push(...entriesToDelete);

};