import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark, Coordinates2D, Coordinates4D } from '../types';
import reopenSectors from '../game/reopenSectors';

interface gameState {
    board: Array<Array<Mark>>,
    sectors: Array<Array<Array<Array<Mark>>>>,
    turn: number,
    openSectors: Array<Array<boolean>>,
    highlightedSector: Coordinates2D | null,
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

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        highlight: (state, action: PayloadAction<Coordinates2D | null>) => {
            if (action.payload == null)
                state.highlightedSector = null;
            else
            {
                const { x, y } = action.payload;
                state.highlightedSector = {
                    x: x,
                    y: y,
                }
            }
        },
        move: (state, action: PayloadAction<Coordinates4D>) => {
            const { x, y, i, j } = action.payload;
            state.sectors[x][y][i][j] = state.turn;
            state.turn = 3 - state.turn;
            state.openSectors = reopenSectors(state.board, i, j);
        }
    }
});

export default gameSlice.reducer;

export const { highlight, move } = gameSlice.actions;