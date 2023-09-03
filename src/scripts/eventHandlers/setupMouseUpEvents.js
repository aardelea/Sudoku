import { sudokuElements, mouseState } from '/src/scripts/config.js';


export function setupMouseUpEvents() {
  sudokuElements.cells.forEach(cell => {
      cell.addEventListener('mouseup', () => {
          mouseState.isMouseDown = false; 
      });
  });
};
