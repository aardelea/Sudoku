import { setupGrid } from './components/setupGrid.js';
import { manageEvents } from './eventHandlers/manageEvents.js';
import { manageButtons } from './components/manageButtons.js';


document.addEventListener('DOMContentLoaded', () => {

    setupGrid();
    manageEvents();
    manageButtons();

});
