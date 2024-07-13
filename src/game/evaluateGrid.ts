import { Mark } from "../types";

function evaluateGrid(grid: Mark[][]): Mark {
    // check only last move?
    const equal = (a: Mark, b: Mark, c: Mark) => a === b && a === c;

    for (let i = 0; i < 3; i++)
        if (grid[i][i] === Mark.X || grid[i][i] === Mark.O)
            if (equal(grid[0][i], grid[1][i], grid[2][i]) || equal(grid[i][0], grid[i][1], grid[i][2]))
                return grid[i][i];

    if (grid[1][1] === Mark.X || grid[1][1] === Mark.O)
        if (equal(grid[0][0], grid[1][1], grid[2][2]) || equal(grid[0][2], grid[1][1], grid[2][0]))
            return grid[1][1];

    const full: boolean = grid.findIndex((row) => row.includes(Mark.None)) < 0

    if (full)
        return Mark.Draw;
    else
        return Mark.None;
}

export default evaluateGrid;