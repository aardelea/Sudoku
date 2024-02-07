import { vars } from './config.js';
import { toggleButtonStateInGroup } from './utils/toggleButtonStateInGroup.js';
import { puzzleSetterPositionButton } from './components/puzzleSetterPositionButton.js';
import { puzzleSetterDigitsButton } from './components/puzzleSetterDigitsButton.js';
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
} from './components/puzzleSetterSymbolButton.js';
import { manageAddingSymbolToBorder } from './eventHandlers/manageAddingSymbolToBorder.js';
import { puzzleEditTitleButton } from './components/puzzleEditTitleButton.js';


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