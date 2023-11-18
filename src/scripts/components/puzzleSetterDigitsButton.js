import { vars } from '/src/scripts/config.js';
import { unpressAllButtonsInGroup } from '/src/scripts/utils/unpressAllButtonsInGroup.js';


export function puzzleSetterDigitsButton() {
    vars.puzzleSetterDigitsButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        unpressAllButtonsInGroup(vars.setterXVButtonsGroup);
        unpressAllButtonsInGroup(vars.setterKropkiButtonsGroup);
        vars.puzzleSetterCurrentSymbol = null;
    });
};
