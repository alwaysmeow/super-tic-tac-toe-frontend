import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface joiningState {
    lobbyCode: number | null,
    playerName: string,
}

const initialState: joiningState = {
    lobbyCode: null,
    playerName: ''
}

const joiningSlice = createSlice({
    name: "joining",
    initialState: initialState,
    reducers: {
        setLobbyCode: (state, action: PayloadAction<number | null>) => {
            state.lobbyCode = action.payload
        },
        setPlayerName: (state, action: PayloadAction<string>) => {
            state.playerName = action.payload
        },
    }
});

export default joiningSlice.reducer;

export const { setLobbyCode, setPlayerName } = joiningSlice.actions;