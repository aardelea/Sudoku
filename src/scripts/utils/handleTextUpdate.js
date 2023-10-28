import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';


export function handleTextUpdate(cell, digit, textType) {
    const currentDigits = Array.from(cell.querySelectorAll(`.${textType}`)).map(span => span.textContent);
    if (currentDigits.includes(digit)) {
        const index = currentDigits.indexOf(digit);
        currentDigits.splice(index, 1);
    } else {
        currentDigits.push(digit);
    };
    currentDigits.sort();

    cell.innerHTML = currentDigits.map(d => `<span class="${textType}">${d}</span>`).join('');
    cell.classList.add(textType);
    adjustFontSize(cell, currentDigits.length);
};