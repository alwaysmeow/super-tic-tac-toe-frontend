import { Mark } from "../types";

function evaluateGrid(grid: Mark[][], x: number, y: number): Mark {
    const win = (a: Mark, b: Mark, c: Mark) => a !== Mark.Draw && a !== Mark.None && a === b && a === c;

    if (win(grid[0][y], grid[1][y], grid[2][y]) || win(grid[x][0], grid[x][1], grid[x][2]))
        return grid[x][y];

    if (x === y)
        if (win(grid[0][0], grid[1][1], grid[2][2]))
            return grid[1][1];

    if (x + y === 2)
        if (win(grid[0][2], grid[1][1], grid[2][0]))
            return grid[1][1];

    const full: boolean = !grid.map((row) => row.includes(Mark.None)).includes(true);

    if (full)
        return Mark.Draw;
    else
        return Mark.None;
}

export default evaluateGrid;