import { Mark } from "../types";

function reopenSectors(board: Array<Array<Mark>>, i: number, j: number)
{
    let openSectors;
    if (board[i][j] === Mark.None)
    {
        openSectors = Array.from({length: 3}, () => 
            Array.from({length: 3}, () => false),
        );
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