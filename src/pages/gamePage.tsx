import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Board from '../components/game/board';
import getGameState from '../requests/getGameState';
import { clearGameState, setGameState } from '../store/gameSlice';
import { setPlayerMark } from '../store/lobbySlice';
import { Mark } from '../types';
import { useNumberParam } from '../hooks/useParam';
import { RootState } from '../store/store';

function GamePage() {
    const dispatch = useDispatch();
    // const lobbyId = useSelector(state => state.lobby.lobbyId);
    const lobbyId = useNumberParam('id');
    const playerName = useSelector<RootState, string>(state => state.lobby.playerName);

    const queryParams = new URLSearchParams({ 
        lobbyId: lobbyId ? lobbyId.toString() : '',
        playerName: playerName,
    }).toString();

    const socketUrl = `ws://127.0.0.1:8080/ws?${queryParams}`;
    const [ messageHistory, setMessageHistory ] = useState<MessageEvent<any>[]>([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
            console.log(lastMessage)
        }
    }, [lastMessage])

    useEffect(() => {
        if (lobbyId)
            getGameState(lobbyId)
            .then(state => {
                dispatch(setGameState(state));
            });
        else
        {
            dispatch(clearGameState());
            dispatch(setPlayerMark(Mark.X | Mark.O));
        }
    }, [dispatch, lobbyId]);

    return (
        <div className='page game-page'>
            <Board/>
        </div>
    );
}

export default GamePage;