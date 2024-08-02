import { LobbyState, Mark } from "../types";

const initialState: LobbyState = {
    lobbyId: null,
    player: Mark.None,
    playerName: '',
}

export const saveState = (state: LobbyState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('lobby', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

export const loadState = (): LobbyState => {
    try {
        const serializedState = localStorage.getItem('lobby');
        if (serializedState === null)
            return initialState; 
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return initialState;
    }
};
  