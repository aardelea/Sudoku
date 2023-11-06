import { homeButton } from '/src/scripts/components/homeButton.js';
import { myPuzzlesButton } from '/src/scripts/components/myPuzzlesButton.js';
import { findPuzzlesButton } from '/src/scripts/components/findPuzzlesButton.js';
import { setterModeButton } from '/src/scripts/components/setterModeButton.js';
import { puzzleEditTitleButton } from '/src/scripts/components/puzzleEditTitleButton.js';


document.addEventListener('DOMContentLoaded', () => {
    homeButton();
    myPuzzlesButton();
    findPuzzlesButton();
    setterModeButton();
    puzzleEditTitleButton();
});
