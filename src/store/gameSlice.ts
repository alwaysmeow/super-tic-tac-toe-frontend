import { createSlice } from '@reduxjs/toolkit';

interface gameState {
    turn: number,
}

const initialState: gameState = {
    turn: 1
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        switchTurn: (state) => {
            state.turn = 3 - state.turn;
        }
    }
});

export default gameSlice.reducer;

export const { switchTurn } = gameSlice.actions;