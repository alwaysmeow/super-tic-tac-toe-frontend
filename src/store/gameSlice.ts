import { createSlice } from '@reduxjs/toolkit';

interface gameState {
    turn: number,
    highlightedSector: number | null,
}

const initialState: gameState = {
    turn: 1,
    highlightedSector: null,
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        switchTurn: (state) => {
            state.turn = 3 - state.turn;
        },
        setHighlightedSector: (state, action) => {
            state.highlightedSector = action.payload;
        }
    }
});

export default gameSlice.reducer;

export const { switchTurn, setHighlightedSector } = gameSlice.actions;