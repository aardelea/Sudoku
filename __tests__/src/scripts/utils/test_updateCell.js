import { updateCell } from '/src/scripts/utils/updateCell.js';

jest.mock('/src/scripts/config.js', () => ({
    vars: {
        actionID: 0,
        undoHistory: [],
        redoHistory: [],
        cells: []
    }
}));

jest.mock('/src/scripts/utils/highlightConflicts.js', () => ({
    highlightConflicts: jest.fn()
}));

describe('updateCell function', () => {

    beforeAll(() => {
        document.body.innerHTML = `
            <div class="cell clicked"></div>
            <div class="cell fixed clicked">1</div>
            <div class="cell"></div>
        `;
        
        require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');
    });

    it('should update the text content of clicked, non-fixed cells', () => {
        updateCell('5');
        const clickedCell = document.querySelector('.clicked:not(.fixed)');
        expect(clickedCell.textContent).toBe('5');
    });

    it('should not update the text content of clicked, fixed cells', () => {
        updateCell('5');
        const fixedCell = document.querySelector('.clicked.fixed');
        expect(fixedCell.textContent).toBe('1');
    });

    it('should call highlightConflicts function', () => {
        const highlightConflicts = require('/src/scripts/utils/highlightConflicts.js').highlightConflicts;
        updateCell('5');
        expect(highlightConflicts).toHaveBeenCalled();
    });

    it('should push changes to undoHistory', () => {
        const { undoHistory } = require('/src/scripts/config.js').vars;
        expect(undoHistory.length).toBeGreaterThan(0);
    });

    it('should empty redoHistory', () => {
        const { redoHistory } = require('/src/scripts/config.js').vars;
        expect(redoHistory.length).toBe(0);
    });

});