import { sudokuElements, mouseState } from '/src/scripts/eventHandlers/manageEvents.js';
import { deselectAllCells } from '/src/scripts/eventHandlers/utils.js';


export function setupMouseDownEvents() {
  sudokuElements.cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
      if (!mouseState.isMouseDown) {
        deselectAllCells();
        mouseState.isMouseDown = true;
      }
      cell.classList.add('clicked');
      cell.focus();
    });
  });
}
