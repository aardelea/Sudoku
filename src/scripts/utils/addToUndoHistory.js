import { vars } from '/src/scripts/config.js';


export function addToUndoHistory(cell, prevContent, actionID) {
    vars.undoHistory.push({
        cell: cell,
        prevContent: prevContent,
        actionID: actionID
    });
};