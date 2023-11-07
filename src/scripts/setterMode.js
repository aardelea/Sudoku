import { vars } from '/src/scripts/config.js';
import { toggleButtonStateInGroup } from '/src/scripts/utils/toggleButtonStateInGroup.js';
import { puzzleStartingPositionButton } from '/src/scripts/components/puzzleStartingPositionButton.js';
import { puzzleSetSolutionButton } from '/src/scripts/components/puzzleSetSolutionButton.js';
import { puzzleEditTitleButton } from '/src/scripts/components/puzzleEditTitleButton.js';


document.addEventListener('DOMContentLoaded', () => {
    const setterButtonsGroup = [vars.puzzleStartingPositionButton, vars.puzzleSetSolutionButton];
    setterButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, setterButtonsGroup);
        });
    });
    
    puzzleStartingPositionButton();
    vars.puzzleStartingPositionButton.click();
    puzzleSetSolutionButton();
    puzzleEditTitleButton();
});
