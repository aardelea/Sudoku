import { vars } from '/src/scripts/config.js';


export function addToUndoHistory(cell, prevContent, prevColor, digit) {
    vars.undoHistory.push({
        cell: cell,
        prevContent: prevContent,
        newDigit: digit,
        prevColor: prevColor,
        actionID: vars.actionID
    });
};