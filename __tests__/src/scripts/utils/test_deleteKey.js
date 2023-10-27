import { deleteKey } from '/src/scripts/utils/deleteKey.js';
import * as highlightConflictsModule from '/src/scripts/utils/highlightConflicts.js';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: [],
        undoHistory: []
    }
}));
jest.mock('/src/scripts/utils/highlightConflicts.js');


describe('deleteKey function', () => {
    beforeAll(() => {
        document.body.innerHTML = `
            <div class="cell clicked user-digit">5</div>
            <div class="cell clicked">1</div>
            <div class="cell user-digit">3</div>
            <div class="cell">4</div>
        `;

        require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');
        deleteKey();
    });

    it('should remove text content and user-digit class for clicked user-digit cells', () => {
        const userDigitCell = document.querySelector('.clicked.user-digit');
        expect(userDigitCell).toBeNull();
    });

    it('should call highlightConflicts function', () => {
        deleteKey();
        expect(highlightConflictsModule.highlightConflicts).toHaveBeenCalled();
    });

    it('should not remove text content from non clicked user-digit cells', () => {
        const nonClickedUserDigitCell = document.querySelector('.user-digit:not(.clicked)');
        expect(nonClickedUserDigitCell.textContent).toBe('3');
    });

});