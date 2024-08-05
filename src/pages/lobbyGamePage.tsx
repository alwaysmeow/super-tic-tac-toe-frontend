import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Board from '../components/game/board';
import getGameState from '../requests/getGameState';
import { setGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { GameState, Mark } from '../types';
import { RootState } from '../store/store';
import { grid2D } from '../game/createGrid';
import socketUrl from '../ws/socketUrl';

interface LobbyGameParams {
    lobbyId: number
}

function LobbyGamePage({lobbyId}: LobbyGameParams) {
    const dispatch = useDispatch();
    const playerName = useSelector<RootState, string>(state => state.lobby.playerName);

    const url = socketUrl(lobbyId, playerName);
    const { sendMessage, lastMessage, readyState } = useWebSocket(url);
    // const [ messageHistory, setMessageHistory ] = useState<MessageEvent<any>[]>([]);

    useEffect(() => {
        if (lastMessage !== null) {
            // setMessageHistory((prev) => prev.concat(lastMessage));
            console.log(lastMessage)

            const data: GameState = JSON.parse(lastMessage.data)
            data.highlight = grid2D<boolean>(false);

            // need to get state.lobby.player

            if ('error' in data)
                console.log(data.error);
            else
                dispatch(setGameState(data))
        }
    }, [lastMessage])

    // this useEffect should be deleted later
    useEffect(() => {               
        getGameState(lobbyId)
        .then(state => {
            dispatch(setGameState(state));
        });
    }, [dispatch, lobbyId]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default LobbyGamePage;