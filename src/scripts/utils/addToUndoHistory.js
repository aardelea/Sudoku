import { vars } from '/src/scripts/config.js';


export function addToUndoHistory(cell, prevContent, prevColor) {
    vars.undoHistory.push({
        cell: cell,
        prevDigit: prevContent.textContent,
        prevContent: prevContent,
        newDigit: cell.textContent,
        prevColor: prevColor,
        actionID: vars.actionID
    });
};