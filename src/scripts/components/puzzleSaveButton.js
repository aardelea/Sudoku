import { Amplify } from 'aws-amplify';
import { createSudokuTable } from '../../graphql/mutations.js';
import { vars } from '../config.js';


export function puzzleSaveButton() {

    if(vars.puzzleSaveButton){
        vars.puzzleSaveButton.onclick = async function() {
            const uid = generateUID();
    
            const puzzleData = {
                uid: uid,
                sudoku_json: "{}", 
                sudoku_title: document.getElementById("puzzleTitle").value,
                sudoku_rules: document.getElementById("puzzleRules").value,
                author: document.getElementById("puzzleAuthor").value,
                created_date: new Date().toISOString(), 
                times_solver: 0,
                solvers: [], 
            };
    
            console.log('puzzleData = ',puzzleData);
    
            try {
                await Amplify.API.graphql(Amplify.graphqlOperation(createSudokuTable, { input: puzzleData }));
                console.log('Puzzle saved successfully');
            } catch (error) {
                console.error('Error saving puzzle:', error);
            };
            
        };
    };

};


function generateUID() {
    return 'uid_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
};
