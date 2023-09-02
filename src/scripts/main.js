import { setupGrid } from './components/grid/setupGrid.js';
import { eventManager } from './eventHandlers/eventManager.js';
import { manageButtons } from './components/buttons/manageButtons.js';


document.addEventListener('DOMContentLoaded', () => {

    setupGrid();
    eventManager();
    manageButtons();

});
