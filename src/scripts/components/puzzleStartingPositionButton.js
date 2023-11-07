import { vars } from '/src/scripts/config.js';


export function puzzleStartingPositionButton() {
    vars.puzzleStartingPositionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = true;
        vars.puzzleSetSolution = false;
        vars.puzzleSetterDigitsButton.click();
    });
};
