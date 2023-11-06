export function updateUserDigitColour(colourVariableName) {
    const newColour = getComputedStyle(document.documentElement).getPropertyValue(colourVariableName).trim();
    document.documentElement.style.setProperty('--colour-user-digit', newColour);
};