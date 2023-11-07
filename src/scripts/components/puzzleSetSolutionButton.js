import { vars } from '/src/scripts/config.js';


export function puzzleSetSolutionButton() {
    vars.puzzleSetSolutionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = false;
        vars.puzzleSetSolution = true;
    });
};
