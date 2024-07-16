import { grid2D } from "../game/createGrid";
import { GameState } from "../types";

async function getStateRequest(lobbyCode: number) {
    const queryParams = new URLSearchParams({ lobbyCode: lobbyCode.toString() }).toString();
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
        .then((data) => {
            const state: GameState = {
                winner: data.winner,
                board: data.board,
                sectors: data.sectors,
                turn: data.turn,
                openSectors: data.moveField,
                highlight: grid2D<boolean>(false),
            };
            return state;
        })
}

export default getStateRequest;