/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSudokuTable = /* GraphQL */ `
  mutation CreateSudokuTable(
    $input: CreateSudokuTableInput!
    $condition: ModelSudokuTableConditionInput
  ) {
    createSudokuTable(input: $input, condition: $condition) {
      uid
      sudoku_json
      sudoku_title
      sudoku_rules
      author
      created_date
      times_solver
      solvers
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSudokuTable = /* GraphQL */ `
  mutation UpdateSudokuTable(
    $input: UpdateSudokuTableInput!
    $condition: ModelSudokuTableConditionInput
  ) {
    updateSudokuTable(input: $input, condition: $condition) {
      uid
      sudoku_json
      sudoku_title
      sudoku_rules
      author
      created_date
      times_solver
      solvers
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSudokuTable = /* GraphQL */ `
  mutation DeleteSudokuTable(
    $input: DeleteSudokuTableInput!
    $condition: ModelSudokuTableConditionInput
  ) {
    deleteSudokuTable(input: $input, condition: $condition) {
      uid
      sudoku_json
      sudoku_title
      sudoku_rules
      author
      created_date
      times_solver
      solvers
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
