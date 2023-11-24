import { vars } from '/scripts/config.js';
import { unpressAllButtonsInGroup } from '/scripts/utils/unpressAllButtonsInGroup.js';


export function puzzleSetterPositionButton() {
    vars.puzzleSetterPositionButton.addEventListener('click', function() {
        vars.puzzleStartingPosition = true;
        vars.puzzleSetterDigitsButton.click();
        unpressAllButtonsInGroup(vars.setterXVButtonsGroup);
        unpressAllButtonsInGroup(vars.setterKropkiButtonsGroup);
        unpressAllButtonsInGroup(vars.setterInequalityButtonsGroup);
    });
};
