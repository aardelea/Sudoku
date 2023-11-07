import { vars } from '/src/scripts/config.js';
import { unpressAllButtonsInGroup } from '/src/scripts/utils/unpressAllButtonsInGroup.js';


export function puzzleSetSolutionButton() {
    vars.puzzleSetSolutionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = false;
        vars.puzzleSetSolution = true;
        unpressAllButtonsInGroup(vars.setterDigitsButtonsGroup);
        unpressAllButtonsInGroup(vars.setterXVButtonsGroup);
    });
};
