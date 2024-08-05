import { useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { useDispatch } from "react-redux";

import { GameState } from "../types";
import { grid2D } from "../game/createGrid";
import { setGameState } from "../store/gameSlice";
import socketUrl from "../ws/socketUrl";
import handleMessage from "../ws/handleMessage";

function useLobby(lobbyId: number, playerName: string) {
    const dispatch = useDispatch();

    const url = socketUrl(lobbyId, playerName);
    const { sendMessage, lastMessage, readyState } = useWebSocket(url);
    // const [ messageHistory, setMessageHistory ] = useState<MessageEvent<any>[]>([]);

    useEffect(() => {
        if (lastMessage !== null) {
            // setMessageHistory((prev) => prev.concat(lastMessage));
            
            handleMessage(lastMessage) // don't actually need this

            const data: GameState = JSON.parse(lastMessage.data)
            data.highlight = grid2D<boolean>(false);

            // need to get state.lobby.player

            if ('error' in data)
                console.log(data.error);
            else
                dispatch(setGameState(data))
        }
    }, [lastMessage])
}

export default useLobby;