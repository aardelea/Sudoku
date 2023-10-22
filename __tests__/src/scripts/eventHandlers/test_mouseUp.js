import { mouseUp } from '/src/scripts/eventHandlers/mouseUp';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: [],
        isMouseDown: true,
    },
}));

let vars = require('/src/scripts/config.js').vars;

describe('mouseUp', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        `;

        vars.cells = document.querySelectorAll('.cell');
        vars.isMouseDown = true;
    });

    test('should set isMouseDown to false on mouseup', () => {
        mouseUp();
        vars.cells[0].dispatchEvent(new Event('mouseup'));
        expect(vars.isMouseDown).toBe(false);
    });

    test('should set isMouseDown to false for each cell on mouseup', () => {
        mouseUp();
        vars.cells.forEach(cell => {
            cell.dispatchEvent(new Event('mouseup'));
            expect(vars.isMouseDown).toBe(false);
        });
    });
});