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
import { puzzleSaveButton } from './components/puzzleSaveButton.js';


document.addEventListener('DOMContentLoaded', () => {
    puzzleSetterPositionButton();
    if(vars.puzzleSetterPositionButton){
        vars.puzzleSetterPositionButton.click();
    };
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
    puzzleSaveButton();

    if(vars.setterButtonsGroup){
        vars.setterButtonsGroup.forEach(button => {
            if(button){
                button.addEventListener('click', function() {
                    toggleButtonStateInGroup(button, vars.setterButtonsGroup);
                });
            }
        });
    };

    if(vars.setterDigitsButtonsGroup){
        vars.setterDigitsButtonsGroup.forEach(button => {
            if(button){
                button.addEventListener('click', function() {
                    toggleButtonStateInGroup(button, vars.setterDigitsButtonsGroup);
                });
            };
        });
    };
    
    if(vars.setterXVButtonsGroup){
        vars.setterXVButtonsGroup.forEach(button => {
            if(button){
                button.addEventListener('click', function() {
                    toggleButtonStateInGroup(button, vars.setterXVButtonsGroup);
                });
            };
        });
    };

    if(vars.setterKropkiButtonsGroup){
        vars.setterKropkiButtonsGroup.forEach(button => {
            if(button){
                button.addEventListener('click', function() {
                    toggleButtonStateInGroup(button, vars.setterKropkiButtonsGroup);
                });
            };
        });
    };    

    if(vars.setterInequalityButtonsGroup){
        vars.setterInequalityButtonsGroup.forEach(button => {
            if(button){
                button.addEventListener('click', function() {
                    toggleButtonStateInGroup(button, vars.setterInequalityButtonsGroup);
                });
            };
        });
    };
});

manageAddingSymbolToBorder();