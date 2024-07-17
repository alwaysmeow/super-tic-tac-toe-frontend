import { grid2D } from "../game/createGrid";
import { GameState, Mark } from "../types";

async function getStateRequest(lobbyId: number) {
    const queryParams = new URLSearchParams({ lobbyId: lobbyId.toString() }).toString();
    const url = `/api/lobby/getGameState?${queryParams}`;
    
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

async function getGameState(lobbyId: number, player: Mark)
{
    return getStateRequest(lobbyId)
        .then((data) => {
            data.player = player;
            data.highlight = grid2D<boolean>(false);
            const state: GameState = data;
            return state;
        })
}


export default getGameState;