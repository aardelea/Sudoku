import { vars } from '/scripts/config.js';
import { toggleButtonStateInGroup } from '/scripts/utils/toggleButtonStateInGroup.js';
import { puzzleSetterPositionButton } from '/scripts/components/puzzleSetterPositionButton.js';
import { puzzleSetterDigitsButton } from '/scripts/components/puzzleSetterDigitsButton.js';
import { 
    puzzleSetterXVButton, 
    puzzleSetterXButton, 
    puzzleSetterVButton, 
    puzzleSetterKropkiButton, 
    puzzleSetterWhiteKropkiButton, 
    puzzleSetterBlackKropkiButton,
    puzzleSetterInequalityButton,
    puzzleSetterInequalityHigherButton,
    puzzleSetterInequalityLowerButton,
} from '/scripts/components/puzzleSetterSymbolButton.js';
import { manageAddingSymbolToBorder } from '/scripts/eventHandlers/manageAddingSymbolToBorder.js';
import { puzzleEditTitleButton } from '/scripts/components/puzzleEditTitleButton.js';


document.addEventListener('DOMContentLoaded', () => {
    puzzleSetterPositionButton();
    vars.puzzleSetterPositionButton.click();
    puzzleSetterDigitsButton();
    puzzleSetterXVButton();
    puzzleSetterXButton();
    puzzleSetterVButton();
    puzzleSetterKropkiButton();
    puzzleSetterWhiteKropkiButton();
    puzzleSetterBlackKropkiButton();
    puzzleSetterInequalityButton();
    puzzleSetterInequalityHigherButton();
    puzzleSetterInequalityLowerButton();

    puzzleEditTitleButton();

    vars.setterButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterButtonsGroup);
        });
    });

    vars.setterDigitsButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterDigitsButtonsGroup);
        });
    });

    vars.setterXVButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterXVButtonsGroup);
        });
    });

    vars.setterKropkiButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterKropkiButtonsGroup);
        });
    });

    vars.setterInequalityButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterInequalityButtonsGroup);
        });
    });
});

manageAddingSymbolToBorder();