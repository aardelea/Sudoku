import { setupMouseDownEvents } from '/src/scripts/eventHandlers/mouse/setupMouseDownEvents.js';
import { setupMouseOverEvents } from '/src/scripts/eventHandlers/mouse/setupMouseOverEvents.js';
import { setupMouseUpEvents } from '/src/scripts/eventHandlers/mouse/setupMouseUpEvents.js';
import { setupClickEvents } from '/src/scripts/eventHandlers/clicks/setupClickEvents.js';
import { setupDoubleClickEvents } from '/src/scripts/eventHandlers/clicks/setupDoubleClickEvents.js';
import { setupEditMode } from '/src/scripts/eventHandlers/clicks/setupEditMode.js';
import { setupDeselection } from '/src/scripts/eventHandlers/clicks/setupDeselection.js';
import { setupKeydownEvents } from '/src/scripts/eventHandlers/keys/setupKeydownEvents.js';


export const sudokuGrid = document.querySelector('.sudoku-grid');
export const mouseState = {
    isMouseDown: false
};
export let cells = sudokuGrid.querySelectorAll('.cell');

export function eventManager() {

    cells = sudokuGrid.querySelectorAll('.cell');

    setupMouseDownEvents();
    setupMouseOverEvents();
    setupMouseUpEvents();
    setupClickEvents();
    setupDoubleClickEvents();
    setupKeydownEvents();
    setupDeselection();
    setupEditMode()

}
