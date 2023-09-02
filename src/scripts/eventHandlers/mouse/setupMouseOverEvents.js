import { cells, mouseState } from '/src/scripts/eventHandlers/eventManager.js';


export function setupMouseOverEvents() {
  cells.forEach(cell => {
      cell.addEventListener('mouseover', () => {
          if (mouseState.isMouseDown) {
              cell.classList.add('clicked');
          }
      });
  });
}
