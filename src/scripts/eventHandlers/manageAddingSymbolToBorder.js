import { vars } from '/src/scripts/config.js';
import { checkIfInnerBorder } from '/src/scripts/utils/checkIfInnerBorder.js';
import { addSymbolToBorder } from '/src/scripts/utils/addSymbolToBorder.js';


export function manageAddingSymbolToBorder() {
    vars.sudokuGrid.addEventListener('click', function(event) {
        if (!vars.puzzleSetterPlaceX) return;

        const isXMarker = event.target.classList.contains('x-marker');
        const targetCell = isXMarker ? event.target.parentNode : event.target;
        
        if (targetCell.classList.contains('cell') && vars.puzzleSetterPlaceX) {
        
            if (isXMarker) {
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