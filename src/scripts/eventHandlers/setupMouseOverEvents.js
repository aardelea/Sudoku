import { cells, mouseState } from './eventListeners.js';


export function setupMouseOverEvents() {
  cells.forEach(cell => {
      cell.addEventListener('mouseover', () => {
          if (mouseState.isMouseDown) {
              cell.classList.add('clicked');
          }
      });
  });
}
