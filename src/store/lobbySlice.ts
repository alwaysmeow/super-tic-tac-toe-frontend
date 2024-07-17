import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark, LobbyState } from '../types';
import { loadState, saveState } from './localStorage';

const initialState: LobbyState = {
    lobbyId: null,
    player: Mark.None,
    playerName: '',
}

const lobbySlice = createSlice({
    name: "lobby",
    initialState: loadState() || initialState,
    reducers: {
        clearLobbyState: (state) => {
            state = initialState;
            saveState(state);
        },
        setLobbyId: (state, action: PayloadAction<number | null>) => {
            state.lobbyId = action.payload;
            saveState(state);
        },
        setPlayerName: (state, action: PayloadAction<string>) => {
            state.playerName = action.payload;
            saveState(state);
        },
        setPlayerMark: (state, action: PayloadAction<Mark>) => {
            state.player = action.payload;
            saveState(state);
        }
    }
});

export default lobbySlice.reducer;

export const { clearLobbyState, setLobbyId, setPlayerName, setPlayerMark } = lobbySlice.actions;