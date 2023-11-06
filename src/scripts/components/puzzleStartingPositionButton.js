import { vars } from '/src/scripts/config.js';
import { updateUserDigitColour } from '/src/scripts/utils/updateUserDigitColour.js';


export function puzzleStartingPositionButton() {
    vars.puzzleStartingPositionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = true;
        vars.puzzleSetSolution = false;

        updateUserDigitColour('--colour-black');
    });
};
