import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';


export function deleteKey() {
    vars.actionID++;
    const entriesToDelete = [];
    
    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked')) {
            const xMarkers = cell.querySelectorAll('.symbol-marker');
            const hasFixedDigitsOrSymbols = xMarkers.length > 0 || cell.classList.contains('fixed');
            const hasUserDigits = cell.classList.contains('user-digit');
            const hasColours = cell.classList.contains('colour-text');

            if (vars.isColourText && hasColours) {
                removeColoursFromCell(cell);
            } else if (hasFixedDigitsOrSymbols && vars.puzzleStartingPosition) {
                xMarkers.forEach(xMarker => cell.removeChild(xMarker)); 

                entriesToDelete.push({
                    cell: cell,
                    prevDigit: cell.textContent,
                    prevContent: cell.innerHTML,
                    actionID: vars.actionID
                });

                cell.textContent = '';
                cell.classList.remove('fixed');
                highlightConflicts('', cell);
            } else if (hasUserDigits && !vars.puzzleStartingPosition){
                const symbolsFragment = document.createDocumentFragment();
                xMarkers.forEach(symbol => {
                    symbolsFragment.appendChild(symbol.cloneNode(true));
                    symbol.remove();
                });
                cell.textContent = '';
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