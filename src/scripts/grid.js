import { manageGrid } from './components/manageGrid.js';
import { manageEvents } from './eventHandlers/manageEvents.js';
import { manageButtons } from './components/manageButtons.js';


document.addEventListener('DOMContentLoaded', () => {
    manageGrid();
    manageEvents();
    manageButtons();
});
