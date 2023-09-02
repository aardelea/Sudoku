import { cells, mouseState, deselectAllCells } from './eventListeners.js';


export function setupMouseDownEvents() {
  cells.forEach(cell => {
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
