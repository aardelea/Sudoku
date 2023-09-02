import { cells, mouseState } from '/src/scripts/eventHandlers/eventManager.js';


export function setupMouseUpEvents() {
  cells.forEach(cell => {
      cell.addEventListener('mouseup', () => {
          mouseState.isMouseDown = false; 
      });
  });
}