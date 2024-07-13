import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark, GlobalCellCoordinates, LocalCellCoordinates, SectorCoordinates } from '../types';

import { grid2D, grid4D } from '../game/createGrid';
import evaluateGrid from '../game/evaluateGrid';
import reopenSectors from '../game/reopenSectors';

interface gameState {
    winner: Mark;
    board: Mark[][],
    sectors: Mark[][][][],
    turn: Mark,
    openSectors: boolean[][],
    highlight: boolean[][],
}

const initialState: gameState = {
    winner: Mark.None,
    board: grid2D<Mark>(Mark.None),
    sectors: grid4D<Mark>(Mark.None),
    turn: Mark.X,
    openSectors: grid2D<boolean>(true),
    highlight: grid2D<boolean>(false),
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        highlight: (state, action: PayloadAction<LocalCellCoordinates | null>) => {
            if (action.payload == null)
                state.highlight = grid2D<boolean>(false);
            else
            {
                const { i, j } = action.payload;
                state.highlight = reopenSectors(state.board, i, j);
            }
        },
        move: (state, action: PayloadAction<GlobalCellCoordinates>) => {
            const { x, y, i, j } = action.payload;
            state.sectors[x][y][i][j] = state.turn;
            state.highlight = grid2D<boolean>(false);

            const localWin = evaluateGrid(state.sectors[x][y]);
            if (localWin !== Mark.None)
            {
                state.board[x][y] = localWin;
                state.winner = evaluateGrid(state.board);
            }

            state.turn = 3 - state.turn;
            state.openSectors = reopenSectors(state.board, i, j);
        }
    }
});

export default gameSlice.reducer;

export const { highlight, move } = gameSlice.actions;