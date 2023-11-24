import { vars } from '/scripts/config.js';
import { manageGrid } from './components/manageGrid.js';
import { mouseDown } from '/scripts/eventHandlers/mouseDown.js';
import { mouseOver } from '/scripts/eventHandlers/mouseOver.js';
import { mouseUp } from '/scripts/eventHandlers/mouseUp.js';
import { clickDouble } from '/scripts/eventHandlers/clickDouble.js';
import { clickEditMode } from '/scripts/eventHandlers/clickEditMode.js';
import { clickDeselectAllCells } from '/scripts/eventHandlers/clickDeselectAllCells.js';
import { keyDown } from '/scripts/eventHandlers/keyDown.js';
import { keyUp } from '/scripts/eventHandlers/keyUp.js';


document.addEventListener('DOMContentLoaded', () => {
    manageGrid();
    vars.cells = vars.sudokuGrid.querySelectorAll('.cell');
    mouseDown();
    mouseOver();
    mouseUp();
    clickDouble();
    keyDown();
    keyUp();
    clickDeselectAllCells();
    clickEditMode();
});
