import { mouseDown, updateMostRecentActiveCell } from '/src/scripts/eventHandlers/mouseDown';
import { deselectAllCells } from '/src/scripts/utils/deselectAllCells';
import { removeSharedEdges } from '/src/scripts/utils/removeSharedEdges';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        isMouseDown: false,
        ctrlOrShiftPressed: false,
        cells: [],
        cell: null
    }
}));
jest.mock('/src/scripts/utils/deselectAllCells');
jest.mock('/src/scripts/utils/removeSharedEdges');


describe('mouseDown function', () => {
    let cells;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        `;
        cells = document.querySelectorAll('.cell');
        require('/src/scripts/config.js').vars.cells = cells;
        mouseDown();
    });

    it('should set isMouseDown to true when cell is moused down', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        cells[0].dispatchEvent(e);
        expect(require('/src/scripts/config.js').vars.isMouseDown).toBe(true);
    });

    it('should call deselectAllCells if ctrlOrShiftPressed is false', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        cells[0].dispatchEvent(e);
        expect(deselectAllCells).toHaveBeenCalled();
    });

    it('should add clicked class to target cell', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        cells[0].dispatchEvent(e);
        expect(cells[0].classList.contains('clicked')).toBe(true);
    });

    it('should focus the target cell', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        const focusSpy = jest.spyOn(cells[0], 'focus');
        cells[0].dispatchEvent(e);
        expect(focusSpy).toHaveBeenCalled();
    });

    it('should call removeSharedEdges', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        cells[0].dispatchEvent(e);
        expect(removeSharedEdges).toHaveBeenCalled();
    });
});


describe('updateMostRecentActiveCell function', () => {
    let cells;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        `;
        cells = document.querySelectorAll('.cell');
        require('/src/scripts/config.js').vars.cells = cells;
        updateMostRecentActiveCell();
    });

    it('should update most recent active cell', () => {
        const e = new MouseEvent('mousedown', { bubbles: true });
        cells[0].dispatchEvent(e);
        expect(require('/src/scripts/config.js').vars.cell).toBe(cells[0]);
    });
});
