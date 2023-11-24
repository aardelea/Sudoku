import { adjustFontSize } from '/scripts/utils/adjustFontSize.js';


export function handleTextUpdate(cell, digit, textType) {
    if (!cell.querySelector('.center-text') && !cell.querySelector('.corner-text')) {
        if (textType === 'center-text' || textType === 'corner-text') {
            cell.querySelector('.digit-text').textContent = '';
        };
    };

    const currentDigits = Array.from(cell.querySelectorAll(`.${textType}`)).map(span => span.textContent);
    if (currentDigits.includes(digit)) {
        const index = currentDigits.indexOf(digit);
        currentDigits.splice(index, 1);
    } else {
        currentDigits.push(digit);
    };
    currentDigits.sort();

    Array.from(cell.querySelectorAll(`.${textType}`)).forEach(span => span.remove());

    const fragment = document.createDocumentFragment();
    currentDigits.forEach((digit, index) => {
        const span = document.createElement('span');
        span.className = textType;
        if (textType === 'corner-text') {
            span.classList.add(`position-${index + 1}`);
        }
        span.textContent = digit;
        fragment.appendChild(span);
    });
    cell.appendChild(fragment);

    cell.classList.add(textType);
    
    if (textType === 'center-text') {
        adjustFontSize(cell, currentDigits.length);
    } else if (textType === 'corner-text') {
        cell.style.fontSize = getComputedStyle(document.documentElement).getPropertyValue('--corner-text-size').trim();
    };
};