import * as clickEditModeModule from '/src/scripts/eventHandlers/clickEditMode';
import { vars } from '/src/scripts/config.js';


document.body.innerHTML = `
    <div class="sudoku-grid">
    <div class="cell"></div>
    <div class="cell fixed"></div>
    </div>
`;
jest.mock('/src/scripts/config.js', () => ({
    vars: {
        isMouseDown: false,
        sudokuGrid: null,
        cells: null
    }
}));


describe('clickEditMode', () => {
    let event;

    beforeAll(() => {
        vars.sudokuGrid = document.querySelector('.sudoku-grid');
        vars.cells = vars.sudokuGrid.querySelectorAll('.cell');
        clickEditModeModule.clickEditMode();
    });

    test('should focus on cell if it does not contain "fixed" class', () => {
        const cell = vars.cells[0];
        cell.focus = jest.fn();

        event = new Event('click', { bubbles: true });
        cell.dispatchEvent(event);

        expect(cell.focus).toHaveBeenCalled();
    });

    test('should not focus on cell if it contains "fixed" class', () => {
        const cell = vars.cells[1];
        cell.focus = jest.fn();

        event = new Event('click', { bubbles: true });
        cell.dispatchEvent(event);

        expect(cell.focus).not.toHaveBeenCalled();
    });
});