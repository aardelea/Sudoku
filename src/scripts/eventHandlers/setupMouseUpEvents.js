import { sudokuElements, mouseState } from '/src/scripts/eventHandlers/manageEvents.js';


export function setupMouseUpEvents() {
  sudokuElements.cells.forEach(cell => {
      cell.addEventListener('mouseup', () => {
          mouseState.isMouseDown = false; 
      });
  });
}