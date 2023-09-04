import { buttons } from '/src/scripts/config.js';
import { performUndo } from '/src/scripts/utils/performUndo.js'


export function undoButton() {
    buttons.undoButton.addEventListener('click', performUndo);
};
