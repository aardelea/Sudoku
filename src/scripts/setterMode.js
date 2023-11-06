import { vars } from '/src/scripts/config.js';
import { manageSetterButtonStates } from '/src/scripts/eventHandlers/manageSetterButtonStates.js';
import { puzzleStartingPositionButton } from '/src/scripts/components/puzzleStartingPositionButton.js';
import { puzzleSetSolutionButton } from '/src/scripts/components/puzzleSetSolutionButton.js';


document.addEventListener('DOMContentLoaded', () => {
    manageSetterButtonStates();
    puzzleStartingPositionButton();
    vars.puzzleStartingPositionButton.click();
    puzzleSetSolutionButton();
});
