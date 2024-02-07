import { vars } from '../config.js';


export function puzzleEditTitleButton() {

    if(vars.puzzleEditTitleButton){
        vars.puzzleEditTitleButton.addEventListener('click', function() {
            vars.modal.style.display = "block";
        });
    }
    
    var span = document.getElementsByClassName("close")[0];
    if(span){
        span.onclick = function() {
            exitModalEditMode();
        };
    };

    var saveBtn = document.getElementById("saveBtn");
    if(saveBtn){
        saveBtn.onclick = function() {
            vars.puzzleTitle = document.getElementById("puzzleTitle").value;
            vars.puzzleAuthor = document.getElementById("puzzleAuthor").value;
            vars.puzzleRules = document.getElementById("puzzleRules").value;
            document.querySelector('.sudoku-title').textContent = vars.puzzleTitle;
            document.querySelector('.sudoku-author').textContent = "by " + vars.puzzleAuthor;
            document.querySelector('.puzzle-rules').textContent = vars.puzzleRules;
            exitModalEditMode();
        };
    };
    
    window.onclick = function(event) {
        if (event.target == vars.modal) {
            exitModalEditMode();
        };
    };
};


export function exitModalEditMode(){
    vars.modal.style.display = "none";
    vars.puzzleSetterPositionButton.click();
};
