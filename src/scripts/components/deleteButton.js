import { deleteKey } from '/src/scripts/utils/deleteKey.js';


export function deleteButton() {
    document.getElementsByClassName('keypad-delete')[0].addEventListener('click', () => {
        deleteKey();
    });
};
