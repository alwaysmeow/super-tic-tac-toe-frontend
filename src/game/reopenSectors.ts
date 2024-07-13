import { Mark } from "../types";
import { grid2D } from "./createGrid";

function reopenSectors(board: Array<Array<Mark>>, i: number, j: number)
{
    let openSectors;
    if (board[i][j] === Mark.None)
    {
        openSectors = grid2D<boolean>(false)
        openSectors[i][j] = true;
    }
    else
    {
        openSectors = board.map(
            (row) => row.map(
                (item) => item === Mark.None
            )
        )
    }
    return openSectors;
}

export default reopenSectors;