import { homeButton } from '/scripts/components/homeButton.js';
import { myPuzzlesButton } from '/scripts/components/myPuzzlesButton.js';
import { findPuzzlesButton } from '/scripts/components/findPuzzlesButton.js';
import { setterModeButton } from '/scripts/components/setterModeButton.js';


document.addEventListener('DOMContentLoaded', () => {
    homeButton();
    myPuzzlesButton();
    findPuzzlesButton();
    setterModeButton();
});
