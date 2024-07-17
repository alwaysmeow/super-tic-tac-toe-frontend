import { LobbyState } from "../types";

export const saveState = (state: LobbyState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('lobby', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('lobby');
        if (serializedState === null)
            return undefined; 
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
};
  