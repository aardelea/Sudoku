import { vars } from '/src/scripts/config.js';
import { unpressAllButtonsInGroup } from '/src/scripts/utils/unpressAllButtonsInGroup.js';


export function puzzleSetterPositionButton() {
    vars.puzzleSetterPositionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = true;
        vars.puzzleSetterDigitsButton.click();
        unpressAllButtonsInGroup(vars.setterXVButtonsGroup);
        unpressAllButtonsInGroup(vars.setterKropkiButtonsGroup);
    });
};
