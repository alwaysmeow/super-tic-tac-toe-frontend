import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface joiningState {
    lobbyId: number | null,
    playerName: string,
}

const initialState: joiningState = {
    lobbyId: null,
    playerName: ''
}

const joiningSlice = createSlice({
    name: "joining",
    initialState: initialState,
    reducers: {
        setLobbyId: (state, action: PayloadAction<number | null>) => {
            state.lobbyId = action.payload
        },
        setPlayerName: (state, action: PayloadAction<string>) => {
            state.playerName = action.payload
        },
    }
});

export default joiningSlice.reducer;

export const { setLobbyId, setPlayerName } = joiningSlice.actions;