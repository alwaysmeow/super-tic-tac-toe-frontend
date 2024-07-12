import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark } from '../types';
import reopenSectors from '../game/reopenSectors';

interface gameState {
    board: Array<Array<Mark>>,
    sectors: Array<Array<Array<Array<Mark>>>>,
    turn: number,
    openSectors: Array<Array<boolean>>,
    highlightedSector: number | null,
}

const initialState: gameState = {
    board: Array.from({length: 3}, () => 
        Array.from({length: 3}, () => 0),
    ),
    sectors: Array.from({length: 3}, () => 
        Array.from({length: 3}, () => 
            Array.from({length: 3}, () => 
                Array.from({length: 3}, () => 0),
            )
        )
    ),
    turn: 1,
    openSectors: Array.from({length: 3}, () => 
        Array.from({length: 3}, () => true),
    ),
    highlightedSector: null,
}

interface MovePayload {
    x: number,
    y: number,
    i: number,
    j: number
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setHighlightedSector: (state, action) => {
            state.highlightedSector = action.payload;
        },
        move: (state, action: PayloadAction<MovePayload>) => {
            const { x, y, i, j } = action.payload;
            state.sectors[x][y][i][j] = state.turn;
            state.turn = 3 - state.turn;
            state.openSectors = reopenSectors(state.board, i, j);
        }
    }
});

export default gameSlice.reducer;

export const { setHighlightedSector, move } = gameSlice.actions;