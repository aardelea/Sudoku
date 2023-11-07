import { vars } from '/src/scripts/config.js';
import { checkIfInnerBorder } from '/src/scripts/utils/checkIfInnerBorder.js';
import { addSymbolToBorder } from '/src/scripts/utils/addSymbolToBorder.js';


export function manageAddingSymbolToBorder() {
    vars.sudokuGrid.addEventListener('click', function(event) {
        if (!vars.puzzleSetterCurrentSymbol) return;

        const isSymbolMarker = event.target.classList.contains('symbol-marker');
        const targetCell = isSymbolMarker ? event.target.parentNode : event.target;
        
        if (targetCell.classList.contains('cell') && vars.puzzleSetterCurrentSymbol) {
        
            if (isSymbolMarker) {
                targetCell.removeChild(event.target);
            } else {
                const borderInfo = checkIfInnerBorder(targetCell, event);
                
                if (borderInfo.isInnerBorder) {
                    addSymbolToBorder(targetCell, borderInfo.direction, vars.sudokuGrid);
                };
            };
        };
    });
};