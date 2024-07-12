import { createSlice } from '@reduxjs/toolkit';

interface gameState {
    currentPlayer: number,
}

const initialState: gameState = {
    currentPlayer: 1
}

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        switchPlayer: (state) => {
            state.currentPlayer = 3 - state.currentPlayer;
        }
    }
});

export default gameSlice.reducer;

export const { switchPlayer } = gameSlice.actions;