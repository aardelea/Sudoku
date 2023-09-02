import { setupGrid } from './components/grid/setupGrid.js';
import { setupEventListeners } from './eventHandlers/eventListeners.js';
import { manageButtons } from './components/buttons/manageButtons.js';


document.addEventListener('DOMContentLoaded', () => {

    setupGrid();
    setupEventListeners();
    manageButtons();

});
