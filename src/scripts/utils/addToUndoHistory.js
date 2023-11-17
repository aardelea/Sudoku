import { vars } from '/src/scripts/config.js';


export function addToUndoHistory(cell, prevContent) {
    vars.undoHistory.push({
        cell: cell,
        prevContent: prevContent,
        actionID: vars.actionID
    });
};