import { vars } from '/src/scripts/config.js';
import { performRedo } from '/src/scripts/utils/performRedo.js'


export function redoButton() {
    vars.redoButton.addEventListener('click', performRedo);
};
