import { grid2D } from "../game/createGrid";
import { GameState } from "../types";

async function getStateRequest(lobbyCode: number) {
    const queryParams = new URLSearchParams({ lobbyCode: lobbyCode.toString() }).toString();
    const url = `/api/Lobby/getGameState?${queryParams}`;
    
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

async function getGameState(lobbyId: number)
{
    return getStateRequest(lobbyId)
        .then((data) => {
            data.highlight = grid2D<boolean>(false);
            data.openSectors = data.moveField;          //
            data.moveField = undefined;                 //
            const state: GameState = data;
            return state;
        })
}

export default getGameState;