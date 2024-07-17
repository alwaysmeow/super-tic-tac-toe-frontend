import { grid2D } from "../game/createGrid";
import { GameState } from "../types";

async function getStateRequest(lobbyId: number, playerName: string) {
    const queryParams = new URLSearchParams({ 
        lobbyId: lobbyId.toString(), 
        playerName: playerName,
    }).toString();
    const url = `/api/lobby/getGameState?${queryParams}`;
    console.log(url);
    
    return await fetch(url, 
        {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
}

async function getGameState(lobbyId: number, playerName: string)
{
    return getStateRequest(lobbyId, playerName)
        .then((data) => {
            data.highlight = grid2D<boolean>(false);
            const state: GameState = data;
            console.log(state);
            return state;
        })
}

export default getGameState;