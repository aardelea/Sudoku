import { mouseDown } from '/src/scripts/eventHandlers/mouseDown.js';
import { mouseOver } from '/src/scripts/eventHandlers/mouseOver.js';
import { mouseUp } from '/src/scripts/eventHandlers/mouseUp.js';
import { clickHighlighting } from '/src/scripts/eventHandlers/clickHighlighting.js';
import { clickDouble } from '/src/scripts/eventHandlers/clickDouble.js';
import { clickEditMode } from '/src/scripts/eventHandlers/clickEditMode.js';
import { clickDeselectAllCells } from '/src/scripts/eventHandlers/clickDeselectAllCells.js';
import { keyDown } from '/src/scripts/eventHandlers/keyDown.js';
import { keyUp } from '/src/scripts/eventHandlers/keyUp.js';
import { vars } from '/src/scripts/config.js';


export function manageEvents() {

    vars.cells = vars.sudokuGrid.querySelectorAll('.cell');

    mouseDown();
    mouseOver();
    mouseUp();
    clickHighlighting();
    clickDouble();
    keyDown();
    keyUp();
    clickDeselectAllCells();
    clickEditMode()

};
