import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark, GlobalCellCoordinates, LocalCellCoordinates, SectorCoordinates } from '../types';
import reopenSectors from '../game/reopenSectors';
import { grid2D, grid4D } from '../game/createGrid';

interface gameState {
    board: Mark[][],
    sectors: Mark[][][][],
    turn: number,
    openSectors: boolean[][],
    highlight: boolean[][],
}

const initialState: gameState = {
    board: grid2D<Mark>(Mark.None),
    sectors: grid4D<Mark>(Mark.None),
    turn: 1,
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
            state.turn = 3 - state.turn;
            state.openSectors = reopenSectors(state.board, i, j);
        }
    }
});

export default gameSlice.reducer;

export const { highlight, move } = gameSlice.actions;