import { vars } from '/src/scripts/config.js';
import { updateUserDigitColour } from '/src/scripts/utils/updateUserDigitColour.js';


export function puzzleSetSolutionButton() {
    vars.puzzleSetSolutionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = false;
        vars.puzzleSetSolution = true;

        updateUserDigitColour('--colour-user-digit-setter');

        vars.cells.forEach(cell => {
            cell.classList.remove('user-digit');
        });
    });
};
