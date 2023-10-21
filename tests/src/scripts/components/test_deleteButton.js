import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';

jest.mock('/src/scripts/config.js', () => ({
  vars: {
    cells: []
  }
}));
jest.mock('/src/scripts/utils/highlightConflicts.js');

describe('deleteButton function', () => {
  let deleteBtn;
  
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="keypad-delete"></div>
      <div class="cell clicked user-digit">1</div>
      <div class="cell clicked">2</div>
      <div class="cell user-digit">3</div>
    `;
    deleteBtn = document.querySelector('.keypad-delete');
    
    require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');

    highlightConflicts.mockClear();
    deleteButton();
  });

  it('remove text from .clicked.user-digit cells', () => {
    const cell = document.querySelector('.clicked.user-digit');
    deleteBtn.click();
    expect(cell.textContent).toBe('');
  });

  it('not remove text from .user-digit but but .clicked cells', () => {
    const cell = document.querySelector('.user-digit:not(.clicked)');
    deleteBtn.click();
    expect(cell.textContent).toBe('3');
  });

  it('not remove text from .clicked but not .user-digit cells', () => {
    const cell = document.querySelector('.clicked:not(.user-digit)');
    deleteBtn.click();
    expect(cell.textContent).toBe('2');
  });

  it('remove .user-digit class for .clicked.user-digit cells', () => {
    const cell = document.querySelector('.clicked.user-digit');
    deleteBtn.click();
    expect(cell.classList.contains('user-digit')).toBe(false);
  });

  it('call highlightConflicts', () => {
    deleteBtn.click();
    expect(highlightConflicts).toHaveBeenCalledTimes(1);
  });
});