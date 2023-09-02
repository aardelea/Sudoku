import { setupGrid } from './gridSetup.js';
import { setupEventListeners } from './eventListeners.js';
import { setupButtons } from './buttons.js';

document.addEventListener('DOMContentLoaded', () => {

    setupGrid();
    setupEventListeners();
    setupButtons();

});
