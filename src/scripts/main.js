import { setupGrid } from './components/gridSetup.js';
import { setupEventListeners } from './eventHandlers/eventListeners.js';
import { setupButtons } from './components/buttons.js';

document.addEventListener('DOMContentLoaded', () => {

    setupGrid();
    setupEventListeners();
    setupButtons();

});
