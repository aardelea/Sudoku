import { vars } from '/src/scripts/config.js';
import { manageGrid } from './components/manageGrid.js';
import { mouseDown } from '/src/scripts/eventHandlers/mouseDown.js';
import { mouseOver } from '/src/scripts/eventHandlers/mouseOver.js';
import { mouseUp } from '/src/scripts/eventHandlers/mouseUp.js';
import { clickDouble } from '/src/scripts/eventHandlers/clickDouble.js';
import { clickEditMode } from '/src/scripts/eventHandlers/clickEditMode.js';
import { clickDeselectAllCells } from '/src/scripts/eventHandlers/clickDeselectAllCells.js';
import { keyDown } from '/src/scripts/eventHandlers/keyDown.js';
import { keyUp } from '/src/scripts/eventHandlers/keyUp.js';


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
