import { puzzleStartingPositionButton } from '/src/scripts/components/puzzleStartingPositionButton.js';
import { manageSetterButtonStates } from '/src/scripts/eventHandlers/manageSetterButtonStates.js';


document.addEventListener('DOMContentLoaded', () => {
    puzzleStartingPositionButton();
    manageSetterButtonStates();
});
