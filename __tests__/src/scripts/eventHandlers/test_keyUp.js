import * as keyUpModule from '/src/scripts/eventHandlers/keyUp';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        isMouseDown: false,
        ctrlOrShiftPressed: false,
        cells: [],
        cell: null
    }
}));
let vars = require('/src/scripts/config.js').vars;


describe('keyUp', () => {
    let event;

    beforeEach(() => {
        vars.ctrlOrShiftPressed = false;
        keyUpModule.keyUp();
    });

    test('ctrlOrShiftPressed should be true when ctrlKey is pressed', () => {
        event = new KeyboardEvent('keyup', {
            'ctrlKey': true,
            'shiftKey': false
        });
        document.dispatchEvent(event);
        expect(vars.ctrlOrShiftPressed).toBe(true);
    });

    test('ctrlOrShiftPressed should be true when shiftKey is pressed', () => {
        event = new KeyboardEvent('keyup', {
            'ctrlKey': false,
            'shiftKey': true
        });
        document.dispatchEvent(event);
        keyUpModule.keyUp();
        expect(vars.ctrlOrShiftPressed).toBe(true);
    });

    test('ctrlOrShiftPressed should be false when neither ctrlKey nor shiftKey is pressed', () => {
        event = new KeyboardEvent('keyup', {
            'ctrlKey': false,
            'shiftKey': false
        });
        document.dispatchEvent(event);
        expect(vars.ctrlOrShiftPressed).toBe(false);
    });
});