import { keyPad } from '/src/scripts/components/keyPad.js';
import { updateCell } from '/src/scripts/utils/updateCell.js';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        keypadButtons: []
    }
}));
jest.mock('/src/scripts/utils/updateCell.js');


describe('keyPad function', () => {
    let button1, button2, buttonX;

    beforeAll(() => {
        document.body.innerHTML = `
            <button class="keypad-button">1</button>
            <button class="keypad-button">2</button>
            <button class="keypad-button">X</button>
        `;

        button1 = document.querySelectorAll('.keypad-button')[0];
        button2 = document.querySelectorAll('.keypad-button')[1];
        buttonX = document.querySelectorAll('.keypad-button')[2];

        require('/src/scripts/config.js').vars.keypadButtons = document.querySelectorAll('.keypad-button');

        keyPad();
    });

    beforeEach(() => {
        updateCell.mockClear();
    });

    it('should call updateCell with the correct digit', () => {
        button1.click();
        expect(updateCell).toHaveBeenCalledWith('1');

        button2.click();
        expect(updateCell).toHaveBeenCalledWith('2');
    });

    it('should not call updateCell for non-numeric button', () => {
        buttonX.click();
        expect(updateCell).not.toHaveBeenCalled();
    });
});
