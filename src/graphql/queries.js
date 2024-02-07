/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSudokuTable = /* GraphQL */ `
  query GetSudokuTable($id: ID!) {
    getSudokuTable(id: $id) {
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
export const listSudokuTables = /* GraphQL */ `
  query ListSudokuTables(
    $filter: ModelSudokuTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSudokuTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
