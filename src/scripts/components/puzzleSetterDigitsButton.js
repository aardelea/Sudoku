import { vars } from '../config.js';
import { unpressAllButtonsInGroup } from '../utils/unpressAllButtonsInGroup.js';


export function puzzleSetterDigitsButton() {
    if(vars.puzzleSetterDigitsButton){
        vars.puzzleSetterDigitsButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            unpressAllButtonsInGroup(vars.setterXVButtonsGroup);
            unpressAllButtonsInGroup(vars.setterKropkiButtonsGroup);
            unpressAllButtonsInGroup(vars.setterInequalityButtonsGroup);
            vars.puzzleSetterCurrentSymbol = null;
        });
    };
};
