import { setupMouseDownEvents } from '/src/scripts/eventHandlers/setupMouseDownEvents.js';
import { setupMouseOverEvents } from '/src/scripts/eventHandlers/setupMouseOverEvents.js';
import { setupMouseUpEvents } from '/src/scripts/eventHandlers/setupMouseUpEvents.js';
import { setupClickEvents } from '/src/scripts/eventHandlers/setupClickEvents.js';
import { setupDoubleClickEvents } from '/src/scripts/eventHandlers/setupDoubleClickEvents.js';
import { setupEditMode } from '/src/scripts/eventHandlers/setupEditMode.js';
import { setupDeselection } from '/src/scripts/eventHandlers/setupDeselection.js';
import { setupKeydownEvents } from '/src/scripts/eventHandlers/setupKeydownEvents.js';
import { sudokuElements } from '/src/scripts/config.js';


export function manageEvents() {

    sudokuElements.cells = sudokuElements.sudokuGrid.querySelectorAll('.cell');

    setupMouseDownEvents();
    setupMouseOverEvents();
    setupMouseUpEvents();
    setupClickEvents();
    setupDoubleClickEvents();
    setupKeydownEvents();
    setupDeselection();
    setupEditMode()

};
