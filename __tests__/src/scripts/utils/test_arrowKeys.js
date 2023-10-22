import { arrowKeys } from '/src/scripts/utils/arrowKeys.js';
import * as moveActiveCellModule from '/src/scripts/utils/moveActiveCell.js';


jest.mock('/src/scripts/utils/moveActiveCell.js');
jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: [{ classList: { contains: () => true } }],
        ctrlOrShiftPressed: false
    }
}));
  

describe('arrowKeys function', () => {
    it('should set ctrlOrShiftPressed correctly', () => {

        const event = { ctrlKey: true, shiftKey: false, key: 'ArrowRight' };
        require('/src/scripts/config.js').vars.cells = [{ classList: { contains: () => true } }];

        arrowKeys(event);

        expect(require('/src/scripts/config.js').vars.ctrlOrShiftPressed).toBe(true);
    });

    it('should call moveActiveCell when a cell is clicked', () => {
        const event = { ctrlKey: false, shiftKey: false, key: 'ArrowRight' };
        require('/src/scripts/config.js').vars.cells = [{ classList: { contains: () => true } }];

        arrowKeys(event);

        expect(moveActiveCellModule.moveActiveCell).toHaveBeenCalled();
    });
});