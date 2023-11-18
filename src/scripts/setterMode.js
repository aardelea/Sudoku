import { vars } from '/src/scripts/config.js';
import { toggleButtonStateInGroup } from '/src/scripts/utils/toggleButtonStateInGroup.js';
import { puzzleSetterPositionButton } from '/src/scripts/components/puzzleSetterPositionButton.js';
import { puzzleSetterDigitsButton } from '/src/scripts/components/puzzleSetterDigitsButton.js';
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
} from '/src/scripts/components/puzzleSetterSymbolButton.js';
import { manageAddingSymbolToBorder } from '/src/scripts/eventHandlers/manageAddingSymbolToBorder.js';
import { puzzleEditTitleButton } from '/src/scripts/components/puzzleEditTitleButton.js';


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