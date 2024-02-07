import { Amplify } from 'aws-amplify';
import { createSudokuTable } from '../../graphql/mutations.js';
import { vars } from '../config.js';


export function puzzleEditTitleButton() {

    vars.puzzleEditTitleButton.addEventListener('click', function() {
        vars.modal.style.display = "block";
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        exitModalEditMode();
    };

    var saveBtn = document.getElementById("saveBtn");

    saveBtn.onclick = async function() {
        var title = document.getElementById("puzzleTitle").value;
        var author = document.getElementById("puzzleAuthor").value;
        var rules = document.getElementById("puzzleRules").value;

        const uid = generateUID();

        const puzzleData = {
            uid: uid,
            sudoku_json: "{}", 
            sudoku_title: title,
            sudoku_rules: rules,
            author: author,
            created_date: new Date().toISOString(), 
            times_solver: 0,
            solvers: [], 
        };

        try {
            updateDynamoTable(puzzleData)
            vars.puzzleTitle = title;
            vars.puzzleAuthor = author;
            vars.puzzleRules = rules;
            document.querySelector('.sudoku-title').textContent = title;
            document.querySelector('.sudoku-author').textContent = "by " + author;
            document.querySelector('.puzzle-rules').textContent = rules;
        } catch (error) {
            console.error('Error saving puzzle:', error);
        }
        
        exitModalEditMode();
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
}

function generateUID() {
    return 'uid_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
}


async function updateDynamoTable(puzzleData){
    await Amplify.API.graphql(Amplify.graphqlOperation(createSudokuTable, { input: puzzleData }));
    console.log('Puzzle saved successfully');
}