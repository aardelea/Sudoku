import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';


export function handleTextUpdate(cell, digit, textType) {
    if (!cell.querySelector('.center-text') && !cell.querySelector('.corner-text')) {
        if (textType === 'center-text' || textType === 'corner-text') {
            cell.innerHTML = '';
        }
    }

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
    currentDigits.forEach(d => {
        const span = document.createElement('span');
        span.className = textType;
        span.textContent = d;
        fragment.appendChild(span);
    });
    cell.appendChild(fragment);

    cell.classList.add(textType);
    
    if (textType === 'center-text') {
        adjustFontSize(cell, currentDigits.length);
    } else if (textType === 'corner-text') {
        cell.style.fontSize = getComputedStyle(document.documentElement).getPropertyValue('--corner-text-size').trim();
    }
};