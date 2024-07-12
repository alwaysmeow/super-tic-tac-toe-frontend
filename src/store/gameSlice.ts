import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark } from '../types';

interface gameState {
    turn: number,
    highlightedSector: number | null,
    board: Array<Array<Mark>>,
    sectors: Array<Array<Array<Array<Mark>>>>,
}

const initialState: gameState = {
    turn: 1,
    highlightedSector: null,
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
        }
    }
});

export default gameSlice.reducer;

export const { setHighlightedSector, move } = gameSlice.actions;