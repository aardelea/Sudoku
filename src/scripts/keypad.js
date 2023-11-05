import { keyPad } from '/src/scripts/components/keyPad.js';

import { resetButton } from '/src/scripts/components/resetButton.js';
import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { undoButton } from '/src/scripts/components/undoButton.js';
import { redoButton } from '/src/scripts/components/redoButton.js';

import { manageButtonStates } from '/src/scripts/eventHandlers/manageButtonStates.js';
import { digitsCentreButton } from '/src/scripts/components/digitsCentreButton.js';
import { digitsNormalButton } from '/src/scripts/components/digitsNormalButton.js';
import { digitsCornerButton } from '/src/scripts/components/digitsCornerButton.js';
import { digitsColourButton } from '/src/scripts/components/digitsColourButton.js';


document.addEventListener('DOMContentLoaded', () => {
    keyPad();
    resetButton();
    deleteButton();
    undoButton();
    redoButton();
    manageButtonStates()
    digitsNormalButton();
    digitsCentreButton();
    digitsCornerButton();
    digitsColourButton();
});
