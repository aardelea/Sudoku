import { manageGrid } from './components/manageGrid.js';

import { mouseDown } from '/src/scripts/eventHandlers/mouseDown.js';
import { mouseOver } from '/src/scripts/eventHandlers/mouseOver.js';
import { mouseUp } from '/src/scripts/eventHandlers/mouseUp.js';
import { clickHighlighting } from '/src/scripts/eventHandlers/clickHighlighting.js';
import { clickDouble } from '/src/scripts/eventHandlers/clickDouble.js';
import { clickEditMode } from '/src/scripts/eventHandlers/clickEditMode.js';
import { clickDeselectAllCells } from '/src/scripts/eventHandlers/clickDeselectAllCells.js';
import { keyDown } from '/src/scripts/eventHandlers/keyDown.js';
import { keyPad } from '/src/scripts/components/keyPad.js';
import { keyUp } from '/src/scripts/eventHandlers/keyUp.js';
import { vars } from '/src/scripts/config.js';

import { resetButton } from '/src/scripts/components/resetButton.js';
import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { undoButton } from '/src/scripts/components/undoButton.js';
import { redoButton } from '/src/scripts/components/redoButton.js';


document.addEventListener('DOMContentLoaded', () => {
    manageGrid();

    vars.cells = vars.sudokuGrid.querySelectorAll('.cell');
    mouseDown();
    mouseOver();
    mouseUp();
    clickHighlighting();
    clickDouble();
    keyDown();
    keyUp();
    clickDeselectAllCells();
    clickEditMode();
    keyPad();
    
    resetButton();
    deleteButton();
    undoButton();
    redoButton();
});
