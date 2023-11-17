import { vars } from '/src/scripts/config.js';


export function addToUndoHistory(cell, prevContent, prevColor) {
    vars.undoHistory.push({
        cell: cell,
        prevContent: prevContent,
        prevColor: prevColor,
        actionID: vars.actionID
    });
};