import { moveActiveCell } from '/src/scripts/utils/moveActiveCell.js';
import { deselectAllCells } from '/src/scripts/utils/deselectAllCells.js';


jest.mock('/src/scripts/utils/deselectAllCells.js', () => ({
    deselectAllCells: jest.fn()
}));
jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cell: null
    }
}));


describe('moveActiveCell function', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div data-row="1" data-col="1" class="cell"></div>
            <div data-row="1" data-col="2" class="cell"></div>
            <div data-row="2" data-col="1" class="cell"></div>
            <div data-row="2" data-col="2" class="cell"></div>
        `;
        deselectAllCells.mockClear();
    });

    it('should move the active cell according to the arrow direction', () => {
        const initialCell = document.querySelector('[data-row="1"][data-col="1"]');
        moveActiveCell(initialCell, 'ArrowRight', false);

        const newActiveCell = document.querySelector('.clicked');
        expect(newActiveCell.dataset.row).toBe('1');
        expect(newActiveCell.dataset.col).toBe('2');
    });

    it('should call deselectAllCells if keepPrevious is false', () => {
        const initialCell = document.querySelector('[data-row="1"][data-col="1"]');
        moveActiveCell(initialCell, 'ArrowRight', false);
        expect(deselectAllCells).toHaveBeenCalled();
    });

    it('should not call deselectAllCells if keepPrevious is true', () => {
        const initialCell = document.querySelector('[data-row="1"][data-col="1"]');
        moveActiveCell(initialCell, 'ArrowRight', true);
        expect(deselectAllCells).not.toHaveBeenCalled();
    });
});