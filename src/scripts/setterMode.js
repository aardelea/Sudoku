import { vars } from '/src/scripts/config.js';
import { toggleButtonStateInGroup } from '/src/scripts/utils/toggleButtonStateInGroup.js';
import { puzzleStartingPositionButton } from '/src/scripts/components/puzzleStartingPositionButton.js';
import { puzzleSetSolutionButton } from '/src/scripts/components/puzzleSetSolutionButton.js';
import { puzzleEditTitleButton } from '/src/scripts/components/puzzleEditTitleButton.js';


document.addEventListener('DOMContentLoaded', () => {
    puzzleStartingPositionButton();
    vars.puzzleStartingPositionButton.click();
    puzzleSetSolutionButton();
    puzzleEditTitleButton();

    vars.setterButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterButtonsGroup);
        });
    });
});
