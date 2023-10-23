import * as clickDeselectAllCellsModule from '/src/scripts/eventHandlers/clickDeselectAllCells';
import * as deselectAllCellsModule from '/src/scripts/utils/deselectAllCells';
import { vars } from '/src/scripts/config.js';


jest.mock('/src/scripts/config.js', () => {
    const sudokuGrid = {
        contains: jest.fn(),
        dispatchEvent: jest.fn()
    };
    return {
        vars: {
            sudokuGrid
        }
    };
});
jest.mock('/src/scripts/utils/deselectAllCells', () => ({
    deselectAllCells: jest.fn()
}));


describe('clickDeselectAllCells', () => {
    let event;

    beforeEach(() => {
        jest.clearAllMocks();
        clickDeselectAllCellsModule.clickDeselectAllCells();
    });

    test('should call deselectAllCells if clicked outside sudokuGrid', () => {
        event = new Event('click');
        document.dispatchEvent(event);
        expect(deselectAllCellsModule.deselectAllCells).toHaveBeenCalled();
    });

    test('should not call deselectAllCells if clicked inside sudokuGrid', () => {
        event = new Event('click');
        vars.sudokuGrid.dispatchEvent(event);
        expect(deselectAllCellsModule.deselectAllCells).not.toHaveBeenCalled();
    });
});