import { vars } from '/src/scripts/config.js';
import { performUndo } from '/src/scripts/utils/performUndo.js'


export function undoButton() {
    vars.undoButton.addEventListener('click', performUndo);
};
